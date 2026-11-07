- **Stellar spectrum.** Measure of the electromagnetic radiation of a star, characterized by wavelength and flux. 
	- **Absorption line.** Dip in the flux values where gases in the star's atmosphere have absorbed specific wavelengths.

Possible changes to a star's spectrum:
- **Pure line shift.** Spectral profile moving left or right due to Doppler shift.
- **Line-shape distortion.** Change in spectrum shape due to stellar activity.

```ad-prop
title: Cross-Correlation Function (CCF)

- **Observed stellar spectrum.** Spectra from the actual star.
- **Binary mask.** All null, except at the exact theoretical wavelengths where a specific type of star is supposed to have absorption lines.
  
These are compared across multiple radial velocities, an output value for each velocity. The lower the value, the higher the correlation.

A Gaussian fit is often applied to the output CCF values in order to find the RV mean and standard deviation. 
```

```ad-prop
title: Gram-Schmidt Decomposition

Used to isolate pure line shifts from line-shape distortions.

1. A baseline template of the star is created, averaging all CCFs across a long time series. Transient distortions are mitigated.
2. An orthogonal basis is created, where the first component corresponds with the first derivative of the quiet template. Subsequent components model more complex shape distortions.
   
Projecting the actual CCF onto this basis, the first coefficient quantifies pure line shifts.
```

**The problem:** A pure line shift can also be caused by stellar activity.

**CANSTAR's approach:** To learn stellar activity features from the distortion coefficients and their evolution over time in order to separate stellar activity-induced changes to the line shift.