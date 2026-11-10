# Introduction

- ~={green}Stellar spectrum.=~ Measure of the electromagnetic radiation of a star, characterized by wavelength and flux. 
- ~={green}Absorption line.=~ Dip in the flux values where gases in the star's atmosphere have absorbed specific wavelengths.

Stellar activity:
- ~={green}Starspots.=~ Relatively cool, darker regions of the photosphere.
- ~={green}Faculae.=~ Magnetic regions that are generally brighter than the photosphere.

Possible changes to a star's spectrum:
- ~={green}Line shift.=~ Spectral profile moving left or right.
	- **~={green}Pure=~ line shift.** Line shift caused explicitly due to Doppler shift.
- ~={green}Line-shape distortion.=~ Change in spectrum shape due to stellar activity.

Some stellar activity that affects its apparent RV:

| ![[Pasted image 20261108221907.png \| 300]] | ![[shift.jpg \| 500]] |
|:-------------------------------------------:|:---------------------:|
|          *Starspots* or *faculae*           |       Rotation        |

- **Convective blueshift.** Even in inactive stars, all around the photosphere hot plasma rises from deep within the star (blueshift), forming bright granules. It cools down at the surface and sinks back down (redshift), forming narrower lanes between the granules.

	The bright granules cover a larger area than the cooler lanes between them, thus the overall star's spectral lines are blueshifted.




# Some mathematical background

````ad-prop
title: Cross-Correlation Function (CCF)

- **Observed stellar spectrum.** Spectra from the actual star.
- **Binary mask.** All null, except at the exact theoretical wavelengths where a specific type of star is supposed to have absorption lines.
  
These are compared across multiple radial velocities, an output value $O(v,t)$ for each velocity and observation. The lower the value, the higher the correlation. This tends to follow a normal distribution. 

```ad-not
title: CCF diagnostics

We can extract other information about stellar activity from the CCF:
- ~={green}Contrast (CON).=~ Depth of the dip in comparison to the baseline. 
- ~={green}Full Width at Half Maximum (FWHM).=~ Width of the top half of the Gaussian curve.
- ~={green}Bisector Inverse Slope (BIS).=~ First a bisector curve is constructed finding the midpoint of the two CCF values at different heights. The upper (60-90%) and lower (10-40%) velocities are averaged and subtracted.

  _**Note:** In contrast to the other parameters, BIS describes asymmetry._
```
````


### Other approaches

A Gaussian fit is typically applied to the CCF, where its centroid represents the actual star's RV.

After obtaining the RV time series $RV(t)$, typically a Gaussian Process (GP) regression is used to model the quasi-periodic distortions induced by stellar activity. It can also become multidimensional incorporating additional time-dependent measurements like photometry and CCF diagnostics.


### CANSTAR'S approach

A Gaussian fit is applied to $O(v)$ as a **weight function**, thus giving more weight to the center of the CCF and less weight to the noise-dominated wings.

```ad-prop
title: Gram-Schmidt Decomposition

Used to isolate line shifts from line-shape distortions.

1. A baseline template $T(v)$ of the star is created, averaging all CCFs across the time series. This approximates the star's behavior in a quiet state.
2. An orthogonal basis is created, where the first components (aside from the identity $I(v)$) correspond with $T(v)$ and its first derivative $T'(v)$, which captures the star's line shifts.
3. Subsequent components $\{G_{n}(v)\}_{n}$ model more complex shape distortions.
   
	_**Note:** Some of these distortion components model the same behavious as previously mentioned indicators like FWHM and BIS._
	
The resulting decomposition is:
$$ \boxed{\, O(v,t) \approx c_{0}(t)\,I(v) + c_{1}(t)\,T(v) + l(t)\,T'(v) + \sum_{n=2}^{N-1} g_{n}(t)\,G_{n}(v) \,} $$

where the coefficient $l(t)$ quantifies apparent line shifts.

In practice, the first element computed in the Gram-Schmidt process will be $T'(v)$ to ensure orthogonality with respect to all other elements of the basis.
```

~={pink}**The problem:**=~ A line shift can also be caused by stellar activity.

~={green}**The approach:**=~ To learn stellar activity features from the distortion coefficients and their evolution over time in order to separate stellar activity-induced changes to the line shift.


# Synthetic data: StarSim

Simulates stellar surface (quiet photosphere, cool spots and faculae) to produce synthetic photometric and spectroscopic observables. Directly computes the resulting CCF.

Active regions are modelled as circular starspots with 7 parameters ~={faded}(appearance time, lifetime, colatitude, longitude, spot radius, linear growth rate, linear decay rate)=~, surrounded by a facular region with a global facula-to-spot ratio parameter $Q$, fixed for each simulation.

Lastly, photon noise is simulated on the CCF. The ratio of mean observational error to $RV(t)$ RMS is computed in order to quantify the amount of noise to inject.


# Appendix

```ad-prop
title: Generalized Lomb-Scargle Periodogram

Statistical method used to find periodic signals in unevenly spaced time-series data. Plots each tested period against its EVR (*power*).

This produces a plot with peaks at the estimated periods.

The **False Alarm Probability (FAP)** measures the probability that a noise-only dataset could produce a periodogram peak as high or higher than a certain level.

![[Pasted image 20261110213802.png | 300]]

<center><i>Period vs EVR plot and its 10%, 1% and 0.1% FAP levels.</i></center>
```