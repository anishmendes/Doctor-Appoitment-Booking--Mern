import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import DoctorCard from "./DoctorCard";

import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loading";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[10px] ">
          {doctors.map((doctor, index) => {
            return (
              <div key={index}>
                <DoctorCard doctor={doctor} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DoctorList;
