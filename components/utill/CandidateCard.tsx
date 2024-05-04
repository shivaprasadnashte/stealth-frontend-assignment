 // @ts-nocheck
 "use client";
import { useContext } from "react";
import UserContext from "@/context/Usercontext";
import data from "@/public/data";
import { it } from "node:test";
interface Candidate {
  profile_picture_url: string;
  name: string;
  email: string;
  total_score_percentage: number;
  shortlisted: boolean;
}

type Props = {
  toReview: boolean;
};

const CandidateCard: React.FC<Props> = ({ toReview }) => {
  const { setUser } = useContext(UserContext);
  const filteredCandidates: Candidate[] = data.candidates.filter((item) =>
    toReview ? !item.shortlisted : item.shortlisted
  );

 

  return (
    <>
      {filteredCandidates.map((candidate, index) => {
        return(
          <div key={index} className="flex items-center justify-between p-1 md:pr-8"
          onClick={() => setUser(candidate)}
          >
          <div className="flex items-center gap-5">
            <div>
              <img src={candidate.profile_picture_url} alt="user profile photo" className="md:w-12 md:h-12 w-10 h-9 rounded-md" />
            </div>
            <div>
              <p className="text-sm w-32 overflow-scroll no-scrollbar font-bold">{candidate.name}</p>
              <p className="text-xs text-gray-400">{candidate.email}</p>
            </div>
          </div>
          <div className="text-2xl text-green-500 font-bold">{candidate.total_score_percentage}%</div>
        </div>
        )
})}
    </>
  );
};

export default CandidateCard;
