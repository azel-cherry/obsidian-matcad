- **Stellar spectrum.** Measure of the electromagnetic radiation of a star, characterized by wavelength and flux. 
	- **Absorption line.** Dip in the flux values where gases in the star's atmosphere have absorbed specific wavelengths.

Possible changes to a star's spectrum:
- **Pure line shift.** Spectral profile moving left or right due to Doppler shift.
- **Line-shape distortion.** Change in spectrum shape due to stellar activity.

````ad-prop
title: Cross-Correlation Function (CCF)

- **Observed stellar spectrum.** Spectra from the actual star.
- **Binary mask.** All null, except at the exact theoretical wavelengths where a specific type of star is supposed to have absorption lines.
  
These are compared across multiple radial velocities, an output value for each velocity. The lower the value, the higher the correlation.

The output of the CCF typically follows a normal distribution. Thus a Gaussian fit is applied, where its centroid represents the actual star's RV.

```ad-not
title: CCF diagnostics

We can extract other information about stellar activity from the CCF:
- **Contrast (CON).** Depth of the dip in comparison to the baseline. 
- **Full Width at Half Maximum (FWHM).** Width of the top half of the Gaussian curve.
- **Bisector Inverse Slope (BIS).** First a bisector curve is constructed finding the midpoint of the two CCF values at different heights. The upper (60-90%) and lower (10-40%) velocities are averaged and subtracted.

  In contrast to the other parameters, BIS describes asymmetry.
```
````


### Other approaches

After obtaining the RV time series $RV(t)$, typically a Gaussian Process (GP) regression is used to model the quasi-periodic distortions induced by stellar activity. It can also become multidimensional incorporating additional time-dependent measurements like photometry and CCF diagnostics.


### CANSTAR'S approach

```ad-prop
title: Gram-Schmidt Decomposition

Used to isolate pure line shifts from line-shape distortions.

1. A baseline template of the star is created, averaging all CCFs across a long time series. Transient distortions are mitigated.
2. An orthogonal basis is created, where the first component corresponds with the first derivative of the quiet template. Subsequent components model more complex shape distortions.
   
	_**Note:** Some of these distortion components correspond with previously mentioned indicators like FWHM and BIS._
   
Projecting the actual CCF onto this basis, the first coefficient quantifies pure line shifts.
```

**The problem:** A pure line shift can also be caused by stellar activity.

**The approach:** To learn stellar activity features from the distortion coefficients and their evolution over time in order to separate stellar activity-induced changes to the line shift.
