async function getCoordinates(address) {
  console.log("Fetching coordinates for address:", address);

  const baseUrl = "https://nominatim.openstreetmap.org/search";
  const params = new URLSearchParams({
    q: address,
    format: "json",
    limit: 1,
  });

  const url = `${baseUrl}?${params.toString()}`;

  try {
    console.log("Hitting URL:", url);
    const response = await fetch(url, {
      // headers: {
      //   "User-Agent": "PropertyApp/1.0 (email)",
      // },
    });
    console.log("Response status:", response.status);
    if (!response.ok) throw new Error("Failed to fetch coordinates");

    const data = await response.json();
    console.log("Geo data received:", data);

    if (data.length === 0) return null;

    const { lat, lon } = data[0];
    return { lat, lon };
  } catch (err) {
    console.error("Geocode error: ", err.message);
    return null;
  }
}

export default getCoordinates;
