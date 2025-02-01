interface ConversionOptions {
  fromUnit: string;
  toUnit: string;
  value: number;
}

function convertUnits(options: ConversionOptions): number {
  const conversionMap: { [key: string]: { [key: string]: (value: number) => number } } = {
    mi: { km: (value) => value * 1.60934 },
    km: { mi: (value) => value * 0.621371 },
    ft: { m: (value) => value * 0.3048 },
    m: { ft: (value) => value * 3.28084 },
    in: { cm: (value) => value * 2.54 },
    cm: { in: (value) => value * 0.393701 },
    lb: { kg: (value) => value * 0.453592 },
    kg: { lb: (value) => value * 2.20462 },
    oz: { g: (value) => value * 28.3495 },
    g: { oz: (value) => value * 0.035274 },
    mt: { tons: (value) => value * 1.10231, kg: (value) => value * 1000 },
    tons: { mt: (value) => value * 0.907185 },
    f: { c: (value) => (value - 32) * 5 / 9 },
    c: { f: (value) => value * 9 / 5 + 32 },
    ft2: { m2: (value) => value * 0.09290304 },
    m2: { ft2: (value) => value * 10.7639 },
    acres: { hectares: (value) => value * 0.404685 },
    hectares: { acres: (value) => value * 2.47105 },
    gallons: { liters: (value) => value * 3.78541 },
    liters: { gallons: (value) => value * 0.264172 },
    cubicFeet: { m3: (value) => value * 0.0283168 },
    m3: { cubicFeet: (value) => value * 35.315 },
    cubicMeters: { cubicYards: (value) => value * 1.30795 },
    cubicYards: { cubicMeters: (value) => value * 0.764555 },
  };

  const { fromUnit, toUnit, value } = options;

  // Check if the conversion exists in the map
  if (!conversionMap[fromUnit] || !conversionMap[fromUnit][toUnit]) {
    throw new Error(`Unsupported conversion from ${fromUnit} to ${toUnit}`);
  }

  // Perform the conversion
  return conversionMap[fromUnit][toUnit](value);
}

export default convertUnits;
