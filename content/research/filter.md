---
title: "Spectral analysis with energy filters"
date: 2025-10-08
---

<div style="max-width: 1000px"> 

In these series of works, we probe spectral properties of quantum many-body systems with Gaussian energy filters of the form

$$ P_{\delta}(E) = \exp\left[ - \frac{(E-H)^2}{2\delta^2}\right]. $$

{{% container %}}

## Thermalization probes

- - - 


{{% columns float=right %}}

<br>
<center>{{< figure src="/img/research_filtering_state.png" width="400" >}} </center>
<center>{{< figure src="/img/research_filtering_trace.png" width="400" >}} </center>

{{% /columns %}}


- [1] **Probing Thermalization through Spectral Analysis with Matrix Product Operators**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *S. Iblisdir, J. I. Cirac, and M. C. Bañuls*
  <br /> [Phys. Rev. Lett. **124**, 100602 (2020)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.100602)

- [2] **Classical algorithms for many-body quantum systems at finite energies**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *J. I. Cirac, and M. C. Bañuls*
  <br /> [Phys. Rev. B **106**, 024307 (2022) (**Editor&prime;s suggestion**)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.024307)


- [3] **How thermal is a filtered state?**
  <br /> 
  *In preparation.*
    
The ***microcanonical ensemble*** at finite energy density plays a central role in many-body physics, enabling the study of long-time dynamics and nonequilibrium phenomena. Unlike canonical ensembles, however, few algorithm previously existed for computing microcanonical properties.

This challenge can be addressed by applying energy filters to the entire Hamiltonian spectrum<sup>[1,2]</sup>. By suppressing irrelevant eigenstates, such filters yield the microcanonical ensemble \( \rho_E \approx P_{\delta}(E) / \mathrm{tr} \left[ P_{\delta}(E)\right] \). In one-dimensional systems, these filters can be efficiently implemented using tensor networks via Chebyshev or Fourier expansions.

Moreover, applying the filter directly to a quantum state produces a state approximating thermal equilibrium under the eigenstate thermalization hypothesis (ETH)<sup>[3]</sup>.

<br>
<p class="clearboth">
	&nbsp;
</p>



## Measuring Eigenvalue degeneracies

---

{{% columns float=right %}}



<br>
<center>{{< figure src="/img/QFAMES_flowchart.png" width="500" >}} </center>


{{% /columns %}}

- **Quantum Filtering and Analysis of Multiplicities in Eigenvalue Spectra**
  <br />
  *Z. Ding, L. Lin*, <span style="color: salmon">***Y. Yang***</span>, *R. Zhang*
  <br /> [arXiv:2510.07439 (2025) [quant-ph]](https://arxiv.org/abs/2510.07439)


By scanning over different filter centers, one can reconstruct the local density of states of a chosen initial state, thereby estimating the underlying energy eigenvalues. Remarkably, when multiple initial states are available, this approach also enables the estimation of eigenvalue ***degeneracies***</sup>, which is missing in conventional quantum phase estimation algorithms.

{{% /container %}}

 

<br>
<p class="clearboth">
	&nbsp;
</p>




## Related works

---

- **Algorithms for Quantum Simulation at Finite Energies**, *S. Lu, M. C. Bañuls, and J. I. Cirac*, [PRX Quantum **2**, 020321 (2021)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.020321)
- **Approximating the long time average of the density operator: Diagonal ensemble**, *A. Çakan, J. I. Cirac, and M. C. Bañuls*, [Phys. Rev. B **103**, 115113 (2021)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.115113)
- **Probing off-diagonal eigenstate thermalization with tensor networks**, *M. Luo, R. Trivedi, M. C. Bañuls, and J. I. Cirac*, [Phys. Rev. B **109**, 134304 (2024)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.134304)
- **Measuring the Loschmidt Amplitude for Finite-Energy Properties of the Fermi-Hubbard Model on an Ion-Trap Quantum Computer**, *K. Hémery, et al.*, [PRX Quantum **5**, 030323 (2024)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.030323)
- **Quantum Multiple Eigenvalue Gaussian filtered Search: an efficient and versatile quantum phase estimation method**, *Z. Ding, et al.*, [Quantum 8, 1487 (2024)](https://quantum-journal.org/papers/q-2024-10-02-1487/)

<br>
<p class="clearboth">
	&nbsp;
</p>

  

</div>