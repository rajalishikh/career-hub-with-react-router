import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJobs/FeaturedJob";
import JobCatogoryList from "../JobCatogorylist/JobCatogoryList";


const Home = () => {
    return (
        <div>
            <h1>It is a home page </h1>
            <Banner></Banner>
            <JobCatogoryList></JobCatogoryList>
            <FeaturedJob></FeaturedJob>

            
        </div>
    );
};

export default Home;