// export async function getAddress({ latitude, longitude }) {
//   const res = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
//   );
//   if (!res.ok) throw Error("Failed getting address");

//   const data = await res.json();
//   return data;
// }
// export async function getAddress({ latitude, longitude }) {
//   try {
//     const res = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
//     );

//     if (!res.ok) throw new Error("Failed getting address");

//     return await res.json();
//   } catch (err) {
//     console.error("Address API Error:", err);
//     throw err;
//   }
// }

// export async function getAddress({ latitude, longitude }) {
//   const res = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
//   );

//   if (!res.ok) throw new Error("Failed getting address");

//   const data = await res.json();
//   return data;
// }

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`,
  );

  if (!res.ok) throw new Error("Failed getting address");

  const data = await res.json();

  return {
    locality: data.address?.suburb || data.address?.village || "",
    city: data.address?.city || data.address?.town || "",
    postcode: data.address?.postcode || "",
    countryName: data.address?.country || "",
  };
}
