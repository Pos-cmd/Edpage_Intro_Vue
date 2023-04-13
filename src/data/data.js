import axios from "axios";

export default async () => {
  const program = JSON.stringify({
    action: "select",
    table: "bz_c_program",
  });
  
  const cours = JSON.stringify({
    action: "select",
    table: "bz_c_dance",
  });
  
  const configProgram = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://dance.eleisdigital.com/breeze-server/db-api/global/custom-request/json",
    headers: {
      "X-API-Key": "b47e8c19-9e29-4287-acb1-4f34481402a0",
      "Content-Type": "application/json",
    },
    data: program,
  };
  
  const configCours = {
    
    method: "post",
    maxBodyLength: Infinity,
    url: "https://dance.eleisdigital.com/breeze-server/db-api/global/custom-request/json",
    headers: {
      "X-API-Key": "b47e8c19-9e29-4287-acb1-4f34481402a0",
      "Content-Type": "application/json",
    },
    data: cours,
  };
  
  let calendrier
  
  try {
    // debugger
    const resProgram = await axios(configProgram);
    const resCours = await axios(configCours);
    const program = resProgram.data;
    const cours = resCours.data;
  
    calendrier = program.map((row1) => {
      const matchTable = cours.filter((row2) =>
        JSON.parse(row1.dances).includes(row2.id)
      );
  
      return {
        ...row1,
        dances: matchTable.map((dance) => dance),
      };
    });
  
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
  
  return calendrier
}
