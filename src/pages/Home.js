import React,{ useState, useEffect} from "react";
import CareerDetailCard from "../components/CareerDetailCard";




function Home () {

 const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    async function fetchCareerData() {
       try {
        const response = await fetch('https://api.sheety.co/2ec566badc7051e41eb62ad701db5227/theCareerApp/sheet1');
        const data = await response.json();
        setCareerData(data.sheet1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCareerData();
   }, [{careerData}]);



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