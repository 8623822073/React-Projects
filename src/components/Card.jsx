import apiData from "../api/seriesData.json";
export function Cards() {
  return (
    <>
      <header>
        <ul>
          {apiData.map((curElem) => {
            return (
              <li>
                <div className="card">
                  <div>
                    <img src={curElem.image_url} width="30%" height="30%"></img>
                    <h2>Name:{curElem.name}</h2>
                    <h3>Price:{curElem.price}</h3>
                    <p>Description:{curElem.Description}</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
