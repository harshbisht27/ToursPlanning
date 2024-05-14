import Card from "./Card";
  
function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
            <h2 className="title"> Planning To Roam</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        console.log("hellloo");
                        return <Card key ={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;