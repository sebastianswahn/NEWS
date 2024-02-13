function respiratoryScoreCounter(RR) {
  let respiratoryScore = 0;
  if (!RR) return (respiratoryScore = 0);

  if (RR < 8) {
    respiratoryScore = 3;
  } else if (RR >= 8 && RR < 12) {
    respiratoryScore = 1;
  } else if (RR >= 12 && RR < 20) {
    respiratoryScore = 0;
  } else if (RR >= 20 && RR < 24) {
    respiratoryScore = 2;
  } else if (RR >= 24) {
    respiratoryScore = 3;
  }
  return respiratoryScore;
}

function saturationScoreCounter(SpO2) {
  let saturationScore = 0;
  if (!SpO2) return (saturationScore = 0);

  if (SpO2 < 91) {
    saturationScore = 3;
  } else if (SpO2 >= 91 && SpO2 < 94) {
    saturationScore = 2;
  } else if (SpO2 >= 94 && SpO2 < 96) {
    saturationScore = 1;
  } else if (SpO2 >= 96) {
    saturationScore = 0;
  }
  return saturationScore;
}

function temperatureScoreCounter(temp) {
  let temperatureScore = 0;
  if (!temp) return (temperatureScore = 0);

  if (temp <= 35) {
    temperatureScore = 3;
  } else if (temp >= 35.1 && temp < 36.1) {
    temperatureScore = 1;
  } else if (temp >= 36.1 && temp <= 38) {
    temperatureScore = 0;
  } else if (temp >= 38 && temp <= 39) {
    temperatureScore = 1;
  } else if (temp >= 39.1) {
    temperatureScore = 2;
  }

  return temperatureScore;
}

function heartRateScoreCounter(HR) {
  let heartRateScore = 0;
  if (!HR) return (heartRateScore = 0);

  if (HR < 40) {
    heartRateScore = 3;
  } else if (HR >= 40 && HR < 50) {
    heartRateScore = 1;
  } else if (HR >= 50 && HR < 90) {
    heartRateScore = 0;
  } else if (HR >= 90 && HR < 110) {
    heartRateScore = 1;
  } else if (HR >= 110) {
    heartRateScore = 2;
  } else if (HR >= 130) {
    heartRateScore = 3;
  }
  return heartRateScore;
}

function bloodPressureScoreCounter(systolicBP) {
  let bloodPressureScore = 0;

  if (!systolicBP) return (bloodPressureScore = 0);
  if (systolicBP < 90) {
    bloodPressureScore = 2;
  } else if (systolicBP >= 90 && systolicBP < 100) {
    bloodPressureScore = 2;
  } else if (systolicBP >= 100 && systolicBP < 110) {
    bloodPressureScore = 1;
  } else if (systolicBP >= 110 && systolicBP < 219) {
    bloodPressureScore = 0;
  } else if (systolicBP >= 220) {
    bloodPressureScore = 2;
  }
  return bloodPressureScore;
}

function administeredOxygenScoreCounter(administeredOxygen) {
  let administeredOxygenScore = 0;
  if (!administeredOxygen) return (administeredOxygenScore = 0);

  switch (administeredOxygen) {
    case "Yes":
      administeredOxygenScore = 2;
      break;
    case "No":
      administeredOxygenScore = 0;
      break;
    default:
      administeredOxygenScore = 0;
  }
  return administeredOxygenScore;
}

function avpuScoreCounter(avpu) {
  let avpuScore = 0;
  if (!avpu) return (avpuScore = 0);

  switch (avpu) {
    case "A":
      avpuScore = 0;
      break;
    case "V":
      avpuScore = 1;
      break;
    case "P":
      avpuScore = 2;
      break;
    case "U":
      avpuScore = 3;
      break;
    default:
      avpuScore = 0;
  }
  return avpuScore;
}

function totalScoreCounter(
  RR,
  SpO2,
  temp,
  HR,
  systolicBP,
  administeredOxygen,
  avpu
) {
  const scores = [
    respiratoryScoreCounter(RR),
    saturationScoreCounter(SpO2),
    temperatureScoreCounter(temp),
    heartRateScoreCounter(HR),
    bloodPressureScoreCounter(systolicBP),
    administeredOxygenScoreCounter(administeredOxygen),
    avpuScoreCounter(avpu),
  ];

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const hasThreePoints = scores.some((score) => score >= 3);

  return { totalScore, hasThreePoints };
}

export default totalScoreCounter;