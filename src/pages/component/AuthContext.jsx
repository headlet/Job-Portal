import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // 1. Added updateDoc here
import { auth, db } from "../../firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  //   update user
  const updateUserProfile = async (updatedData) => {
    if (!auth.currentUser) return;

    try {
      const docRef = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(docRef, updatedData);

      setUserDetails((prev) => ({
        ...prev,
        ...updatedData,
      }));

      console.log("Profile updated successfully in database!");
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  // get data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No user document found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User isn't logged in");
        setUserDetails(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserDetails(null);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("error logging out", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
        loading,
        handleLogout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
