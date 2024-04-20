import { useEffect, useState } from "react";
import Job from "../JobDetails/Job";

const FeaturedJob = () => {
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
        
           
            
    },[])
    return (
        <div>
            <h1 className="text-center">Featured Job Section</h1>
            <p className="text-center">

            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className=" grid grid-cols-3 gap-5">
                {
                    jobs.map(item=><Job key={item.id} jobs={item}></Job>)
                }

            </div>
            
        </div>
    );
};

export default FeaturedJob;