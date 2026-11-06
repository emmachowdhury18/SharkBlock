import cuteShark from "../assets/cute-shark.png";

export default function Shop() {
  return (
    <>
      <div className="inset-white-background">
        <div className="shop-grid h-100">
          <img
            src={cuteShark}
            alt="Cute Shark"
            width="300"
            style={{ borderRadius: "10px" }}
          />
          <h3>
            Here is a bunch of information on repelling this cute shark!
            <br />
            <br />
            Reasons To Buy:
            <br />
            - Helps Reduce Shark Interactions While Fishing <br />
            - Reduction in Lost/Broken Fishing Gear <br />- More Fish and Less
            Gear Damaged is Hundreds of Dollars ($$$) Saved <br />
            <br />
            Please note that this product is not intended to completely
            eliminate shark interactions. <br />
            Sharks are wild, conscious, independent animals that make variable
            decisions based off feeding and self-defense urges.
          </h3>
        </div>
      </div>
    </>
  );
}
