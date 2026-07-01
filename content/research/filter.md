---
title: "Spectral analysis with energy filters"
date: 2025-10-08
---

<div style="max-width: 800px"> 

Thermal properties of quantum many-body systems are often closely tied to states with low energy variance, such as energy eigenstates in the framework of the eigenstate thermalization hypothesis (ETH). However, states that are easy to prepare, such as product states, typically have extensive energy variance. A natural way to reduce energy fluctuations is to apply spectral filters, which suppress contributions from undesired energy eigenstates. In this series of works, we use Gaussian energy filters of the form
$$ P_{\delta}(E) = \exp\left[ - \frac{(E-H)^2}{2\delta^2}\right] $$
to probe spectral properties of quantum many-body systems. This approach provides a useful framework for studying a range of questions, including thermalization and quantum phase transitions.

<br />

## Thermalization probes

- - - 





- [1] **Probing Thermalization through Spectral Analysis with Matrix Product Operators**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *S. Iblisdir, J. I. Cirac, and M. C. Bañuls*, 
 [Phys. Rev. Lett. **124**, 100602 (2020)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.100602)

- [2] **Classical algorithms for many-body quantum systems at finite energies**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *J. I. Cirac, and M. C. Bañuls*, 
  [Phys. Rev. B **106**, 024307 (2022) (**Editor&prime;s suggestion**)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.024307)


- [3] **How thermal is a filtered state?**
  <br />
  *In preparation.*

<center>{{< figure src="/img/research_filtering.jpg" width="700" >}}  </center>
    
The ***microcanonical ensemble*** at finite energy density plays a central role in many-body physics, enabling the study of long-time dynamics and nonequilibrium phenomena. Unlike canonical ensembles, however, few algorithm previously existed for computing microcanonical properties.

This challenge can be addressed by applying energy filters to the entire Hamiltonian spectrum<sup>[1,2]</sup>. By suppressing irrelevant eigenstates, such filters yield the microcanonical ensemble \( \rho_E \approx P_{\delta}(E) / \mathrm{tr} \left[ P_{\delta}(E)\right] \). In one-dimensional systems, these filters can be efficiently implemented using tensor networks via Chebyshev or Fourier expansions.

Moreover, applying the filter directly to a quantum state produces a state approximating thermal equilibrium under the assumption of ETH<sup>[3]</sup>.

<br>
<p class="clearboth">
	&nbsp;
</p>



## Measuring eigenvalue degeneracies

---


- [4] **Quantum Filtering and Analysis of Multiplicities in Eigenvalue Spectra**
  <br />
  *Z. Ding, L. Lin*, <span style="color: salmon">***Y. Yang***</span>, *R. Zhang*, 
  [PRX Quantum **7**, 020318 (2026)](https://journals.aps.org/prxquantum/abstract/10.1103/jch7-734h?__cf_chl_f_tk=sKJFkP7ctrMyXMAHiWL0JBW7sEzwVUovutH5RnDyLIE-1782840710-1.0.1.1-PCGfAPr3GKGzD.V6eOoV.INx8hcBmtzVE3hfLfgSlI4)

<center>{{< figure src="/img/QFAMES_flowchart.png" width="500" >}} </center>


By scanning over different filter centers, one can reconstruct the local density of states of a chosen initial state, thereby estimating the underlying energy eigenvalues<sup>[9]</sup>. Remarkably, when multiple initial states are available, this approach also enables the estimation of eigenvalue ***degeneracies***, which is missing in conventional quantum phase estimation algorithms.

 

<br>
<p class="clearboth">
	&nbsp;
</p>




## Related works

---

- [5] **Algorithms for Quantum Simulation at Finite Energies** <br />*S. Lu, M. C. Bañuls, and J. I. Cirac*, [PRX Quantum **2**, 020321 (2021)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.020321)
- [6] **Approximating the long time average of the density operator: Diagonal ensemble** <br /> *A. Çakan, J. I. Cirac, and M. C. Bañuls*, [Phys. Rev. B **103**, 115113 (2021)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.115113)
- [7] **Probing off-diagonal eigenstate thermalization with tensor networks** <br /> *M. Luo, R. Trivedi, M. C. Bañuls, and J. I. Cirac* [Phys. Rev. B **109**, 134304 (2024)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.134304)
- [8] **Measuring the Loschmidt Amplitude for Finite-Energy Properties of the Fermi-Hubbard Model on an Ion-Trap Quantum Computer** <br /> *K. Hémery, et al.*, [PRX Quantum **5**, 030323 (2024)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.030323)
- [9] **Quantum Multiple Eigenvalue Gaussian filtered Search: an efficient and versatile quantum phase estimation method** <br /> *Z. Ding, et al.*, [Quantum 8, 1487 (2024)](https://quantum-journal.org/papers/q-2024-10-02-1487/)

<br>
<p class="clearboth">
	&nbsp;
</p>

  

</div>