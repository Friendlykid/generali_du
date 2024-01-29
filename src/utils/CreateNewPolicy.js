export default async function createNewPolicy(
  insuranceType,
  name,
  surname,
  policyNumber,
) {
  try {
    const response = await fetch(
      "https://private-anon-9ff5babe29-generaliapiexample.apiary-mock.com/policies",
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          insurance_type: insuranceType,
          name: name,
          surname: surname,
          policy_number: policyNumber,
        }),
      },
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      return response.status;
    } else {
      console.error("Failed to create new policy:", response.statusText);
      return response.status;
    }
  } catch (error) {
    console.error("Error while creating new policy:", error);
    throw error;
  }
}
