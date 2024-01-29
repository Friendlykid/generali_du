export default async function getInsuranceTypes() {
  const response = await fetch(
    "https://private-anon-473190a2c8-generaliapiexample.apiary-mock.com/insurance-types",
  );
  const insurance = await response.json();
  return insurance;
}
