import React, { useState } from "react";
import { Score } from "./components/score/Score";
import { Submit } from "./components/submit/Submit";
import { ThankYouCard } from "./components/thankyoucard/ThankYouCard";

function App() {
  const scores = [1, 2, 3, 4, 5];
  const [selectedScore, setSelectedScore] = useState(null);
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleScoreClick = (score) => {
    setSelectedScore(score);
  };

  const handleSubmit = () => {
    if (selectedScore) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#131518]">
      {submitted ? (
        <ThankYouCard selectedScore={selectedScore} />
      ) : (
        <div className="relative w-[412px] h-[416px] bg-[radial-gradient(98.96%_98.96%_at_50%_0%,_#232A34_0%,_#181E27_100%)] rounded-[40px]">
          <div className="relative">
            <img
              src="/public/Oval.png"
              className="absolute top-[32px] left-[32px]"
              alt="Oval decoration"
            />
            <img
              src="/public/Path.png"
              className="absolute top-[48px] left-[48px]"
              alt="Path decoration"
            />
          </div>

          <h1 className="absolute w-[235px] h-[43px] top-[110px] left-[32px] font-overpass text-[28px] font-bold leading-[35.45px] text-white">
            How did we do?
          </h1>

          <p className="absolute w-[340px] h-[72px] top-[160px] left-[32px] text-[#969FAD] font-overpass text-[15px] font-normal leading-[24px]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="flex justify-center mt-[260px]">
            <div className="flex space-x-[25px]">
              {scores.map((score) => (
                <Score
                  key={score}
                  score={score}
                  isSelected={selectedScore === score}
                  onClick={handleScoreClick}
                />
              ))}
            </div>
          </div>

          <Submit selectedScore={selectedScore} onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
