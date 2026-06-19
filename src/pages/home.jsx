function Home() {
  return (
    <section className="">
      {/* Hero Section */}
      <div>
        <h2>Find Your Dream Job Today!</h2>
        <p>
          Connecting Talent with Opportunity. Your Gateway to Career Success
        </p>

        <form action="">
          <input type="text" placeholder="Job Title or Company" />
          <select>
            <option value="" disabled selected hidden>
             Select Location
            </option>

            <option value="ktm">Kathmandu</option>
            <option value="lkt">Lalitpur</option>
            <option value="bkt">Bhaktapur</option>
          </select>
        </form>
      </div>
    </section>
  );
}

export default Home;
