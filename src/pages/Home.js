import React from "react";
import CareerDetailCard from "../components/CareerDetailCard";


const careerData = [
    {
      title: 'Job Title 1',
      qualifications: 'Degree in XYZ field',
      pay: '50,000 - 60,000',
      totalPosts: 10,
      exam: 'Written and Interview',
    },

    {
        title: 'Job Title 2',
        qualifications: 'Degree in ABC field',
        pay: '20,000 - 30,000',
        totalPosts: 100,
        exam: 'Written and Interview',
      },

      {
        title: 'Job Title 3',
        qualifications: 'Degree in ABC field',
        pay: '20,000 - 30,000',
        totalPosts: 100,
        exam: 'Written and Interview',
      },
      {
        title: 'Job Title 4',
        qualifications: 'Degree in ABC field',
        pay: '20,000 - 30,000',
        totalPosts: 100,
        exam: 'Written and Interview',
      },

      {
        title: 'Job Title 5',
        qualifications: 'Degree in ABC field',
        pay: '20,000 - 30,000',
        totalPosts: 100,
        exam: 'Written and Interview',
      },
    // Add more career objects here
  ];

function Home () {

    return (
        <div>

           <h1>Career Details</h1>
           <div className="career-cards-container">
            {careerData.map((career, index) => (
                <CareerDetailCard key={index} career={career} />
              ))}
            </div>
        </div>


    );
}

export default Home;