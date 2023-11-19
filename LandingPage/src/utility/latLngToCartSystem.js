export function latLonToCart(latitude, longitude, altitude, radius) {
  const lat = latitude * (Math.PI / 180);
  const lng = longitude * (Math.PI / 180);

  const realEarthRadius = 6371000;

  const scale = radius / realEarthRadius;

  // Compute the scaled altitude
  const scaledAltitude = altitude * scale;

  //plus two to lift the planes up for visualisation
  const z = (radius + scaledAltitude) * Math.cos(lat) * Math.cos(lng);
  const x = (radius + scaledAltitude) * Math.cos(lat) * Math.sin(lng);
  const y = (radius + scaledAltitude) * Math.sin(lat);
  return [x, y, z]; //.map((e) => e * 2);
}
