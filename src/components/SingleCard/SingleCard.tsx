import "./SingleCard.scss";

export default function SingleCard() {
  return (
    <div className="cardbox">
      <div className="card card--bg">
        <div className="card-front" />
        <div
          className="card-back"
          style={{
            backgroundImage:
              "url(https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg)",
          }}
        />
      </div>
    </div>
  );
}
