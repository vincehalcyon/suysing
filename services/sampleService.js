// import axios from "axios";

async function sampleService(accessToken) {
  // const response = await axios.get(`${configService.apiUrl}/api/v1/sample`, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // })

  // return response.data.data.clients as Client[]
  const sampleData = `
  
    {
      data: {
        data: {
          sample_data: [
            id: 1,
            title: "sample",
            description: "sample data",
            created_at: "2022-09-28T13:51:38.000+00:00",
            updated_at: "2022-09-28T13:51:38.000+00:00"
          ]
        }
      }
    }
  `

  return sampleData
}