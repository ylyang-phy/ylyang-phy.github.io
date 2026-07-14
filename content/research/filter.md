---
title: "Spectral analysis with energy filters"
date: 2025-10-08
---

<div style="max-width: 800px"> 

Thermal properties of quantum many-body systems are often encoded in their "diagonal" part in the Hamiltonian eigenbasis. For example, in the framework of the eigenstate thermalization hypothesis (ETH), each individual energy eigenstate locally resembles a thermal state. States that are easy to prepare, such as pure product states or the maximally mixed state, typically have extensive energy variance that prohibits extraction of thermal properties. 


A natural way to reduce energy fluctuations and coherences is to apply spectral filters, which suppress contributions from undesired energy eigenstates away from the target energy. In this series of work, we apply Gaussian spectral filters to probe spectral properties of quantum many-body systems. This approach provides a useful framework for studying a range of questions, including thermalization and quantum phase transitions.


<center>{{< figure src="/img/research_filtering.jpg" width="700" >}} 

**Left:** filtering a pure state; **Right:** filtering the maximally mixed state
 </center>
<br />

## Filtering the maximally mixed state: microcanonical ensemble as thermalization probe

- - - 


- [1] **Probing Thermalization through Spectral Analysis with Matrix Product Operators**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *S. Iblisdir, J. I. Cirac, and M. C. Bañuls*, 
 [Phys. Rev. Lett. **124**, 100602 (2020)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.100602)

- [2] **Classical algorithms for many-body quantum systems at finite energies**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *J. I. Cirac, and M. C. Bañuls*, 
  [Phys. Rev. B **106**, 024307 (2022) (**Editor&prime;s suggestion**)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.024307)
    
The ***microcanonical ensemble*** at finite energy density plays a central role in many-body physics, enabling the study of long-time dynamics and nonequilibrium phenomena. For example, the comparison of microcanonical and canonical ensemble observable expectation values serves as a probe of whether a quantum many-body system thermalizes.

Unlike canonical ensembles, however, few algorithm previously existed for computing microcanonical properties. This challenge can be addressed by applying spectral filters to a maximally mixed state. In one-dimensional systems, these filters can be efficiently implemented using tensor networks via Chebyshev or Fourier expansions. It also serves as an efficient quantum algorithm<sup>[5]</sup>.
<br>
<p class="clearboth">
	&nbsp;
</p>



## Filtering pure states: what is the required filter width?

- - - 

- [3] **How thermal is a filtered state?**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *J. I. Cirac, and M. C. Bañuls*, 
  [arXiv:2607.06847 [quant-ph]](https://arxiv.org/abs/2607.06847)

In an extreme case when the filter width \(\delta\) is exponentially small in system size, applying the spectral filter to a pure initial state yields an energy eigenstate, which locally resembles thermal states if assuming ETH. Can the choice of \(\delta\) be relaxed?

We answer this question by extending the definition of spectral filters to Floquet dynamics. This setting allows us to analytically compute the Rènyi-\(\alpha\) entanglement entropies of Floquet-filtered states, which are distinct for different \(\alpha\) and only logarithmic in \(1 / \delta\) when \( \alpha > 1\). Moreover, under the assumption of Floquet ETH, we show that for local observables, their errors from thermal values are upper bounded by \( \mathcal{O}(\sqrt{\delta}) \). Finally, by establishing a mapping between Hamiltonian- and Floquet- filtered states, the results can be generalized back to spectral filtered states in the normal Hamiltonian setting.

<br>
<p class="clearboth">
	&nbsp;
</p>



## Filtering pure states: measuring eigenvalue degeneracies

---


- [4] **Quantum Filtering and Analysis of Multiplicities in Eigenvalue Spectra**
  <br />
  *Z. Ding, L. Lin*, <span style="color: salmon">***Y. Yang***</span>, *R. Zhang*, 
  [PRX Quantum **7**, 020318 (2026)](https://journals.aps.org/prxquantum/abstract/10.1103/jch7-734h?__cf_chl_f_tk=sKJFkP7ctrMyXMAHiWL0JBW7sEzwVUovutH5RnDyLIE-1782840710-1.0.1.1-PCGfAPr3GKGzD.V6eOoV.INx8hcBmtzVE3hfLfgSlI4)

<center>{{< figure src="/img/QFAMES_flowchart.png" width="500" >}} </center>


By scanning over different filter centers, one can reconstruct the local density of states of a chosen initial state, thereby estimating the underlying energy eigenvalues<sup>[6]</sup>. Remarkably, when multiple initial states are available, this approach also enables the estimation of eigenvalue ***degeneracies***, which is missing in conventional quantum phase estimation algorithms.

 

<br>
<p class="clearboth">
	&nbsp;
</p>




### *References*
---

- [5] *S. Lu, M. C. Bañuls, and J. I. Cirac*, [PRX Quantum **2**, 020321 (2021)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.020321)
- [6] *Z. Ding, et al.*, [Quantum 8, 1487 (2024)](https://quantum-journal.org/papers/q-2024-10-02-1487/)

<br>
<p class="clearboth">
	&nbsp;
</p>

  

</div>