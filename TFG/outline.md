1. Introduction
2. Theoretical framework
	1. Stellar spectroscopy
	2. Doppler effect
	3. Radial velocity method
	4. State of the art
		1. Cross-correlation function
		2. Gram-Schmidt decomposition
		3. Time-aware CNN
3. Methodology
	1. Star data
		1. Properties of $\epsilon$ Eridani and TZ Ari
		2. Synthetic data
	2. Exoplanet data
	3. Signal injection-recovery
		1. Injection in stellar spectrum
		2. Injection in CANSTAR's output RV series
		3. Recovery
4. Results
	1. CANSTAR's output invariability to signal injection
	2. Planetary signal recovery depending on planetary characteristics

---

1. generate synthetic stellar spectra
2. inject different planetary signals to each spectrum
	- save original spectrum
	- how tf do i inject that
3. go through pipeline
	- CCF, Gram-Schmidt, CANSTAR
4. compare $\widehat{\kappa}(t)$ of original spectrum to $\widehat{\kappa}(t)$ with signal injected
	- should be the same, hopefully
	- does it change for different planetary attributes?
5. generate more stellar CCFs
	- no signal injection
6. go through pipeline
7. remove predicted $\widehat\kappa(t)$
	 - we have the remaining noise $\kappa(t)-\widehat{\kappa}(t)$
8. inject planetary signals to RV time series
	- again, idk how
9. analyse how well they can be recovered depending on planetary properties