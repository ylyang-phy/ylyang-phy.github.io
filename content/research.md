---
title: " "
---

## Ancilla-free phase estimation of complex quantum amplitudes
- - -

- Phase-Sensitive Quantum Measurement without Controlled Operations
<br />
<span style="color: salmon">***Yilun Yang***</span>, *Arthur Christianen, Mari Carmen Bañuls, Dominik S. Wild, and J. Ignacio Cirac*, [arXiv:2308.10796](https://arxiv.org/abs/2308.10796)


The Loschmidt amplitude \\( \mathcal{G}(t) =  \langle \psi^{\prime} | e^{-iH t} | \psi \rangle \\) including the complex phase has broad applications in quantum computation, study of quantum chaos and so on. The standard way to extract the phase information is the Hadamard test, which gives rise to large overheads due to the need for global controlled-unitary operations. We introduce a quantum algorithm based on complex analysis that overcomes this problem: ***no*** ancillary qubits, ***no*** control operations, only time evolution required.

<center>{{< figure src="/img/research_PSQM.png" width="500" >}} </center>



<br>
<br>




## Error-mitigated digital quantum simulation of thermalization
- - -

- Simulating Prethermalization Using Near-Term Quantum Computers
<br />
<span style="color: salmon">***Yilun Yang***</span>, *Arthur Christianen, Sandra Coll-Vinent, Vadim Smelyanskiy, Mari Carmen Bañuls, Thomas E. O&prime;Brien, Dominik S. Wild, and J. Ignacio Cirac*, [PRX Quantum <b>4</b>, 030320](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.4.030320)

Due to decoherence and noise in current devices, it is currently challenging to perform digital quantum simulation in a regime that is intractable with classical computers. In this work, we propose a practical experimental protocol for probing dynamics and equilibrium properties on near-term digital quantum computers. The key ingredients are:

1. The trotterization of Hamiltonian can be viewed as a Floquet driving. Thus the ***prethermalization*** phenomenon can be taken into consideration, which resembles the thermalization of the model underlying the Trotterization up to long times independent of the system size.
2. We propose an ***error mitigation*** scheme that based on the measurement and rescaling of survival probabilities. For noises that can be written as Kraus operators, we prove that this strategy works up to a constant circuit depth, also independent of the system size.


<center>{{< figure src="/img/research_PEVP.png" width="400" >}} </center>


<br>
<br>



## Thermalization probes of many body systems by filtering
- - - 


- Probing Thermalization through Spectral Analysis with Matrix Product Operators
  <br />
  <span style="color: salmon">***Yilun Yang***</span>, *Sofyan Iblisdir, J. Ignacio Cirac, and Mari Carmen Bañuls* , [Phys. Rev. Lett. <b>124</b>, 100602](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.100602) ([poster](/files/posters/slides_VaQuM_Yilun_Yang.pdf))

- Classical algorithms for many-body quantum systems at finite energies
  <br />
  <span style="color: salmon">***Yilun Yang***</span>, *J. Ignacio Cirac, and Mari Carmen Bañuls*, [Phys. Rev. B <b>106</b>, 024307(Editor&prime;s suggestion)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.024307)

The ***microcanonical ensembles*** at finite energy densities have many applications in many body physics. It enables studying the long time behaviors of given initial states and helps to probe the out-of-equilibrium phenomena. Unlike the canonical ensembles, no standard algorithm exists for computing microcanonical ensemble properties.

We develop a technique to solve this problem using ***energy filters*** that can be applied to both fixed initial states and the whole spectrum. A (Gaussian) filter
\\(P_{\delta} (E) = \exp[-(E-H)^2 / 2\delta^2]\\) as a energy projector can filter out irrelevant energy eigenstates and thus obtain the microcanonical ensemble. Such filters can be efficiently implemented with tensor networks in one-dimensional systems, by expanding it with the Chebyshev or Fourier series.

<center>
<div class="image">
    <div style="display:inline-block;">
        <img src="/img/research_filtering_state.png"  width="350"  />
        <p style="text-align:center;">filtering a state</p>
    </div>
    <div style="display:inline-block;">
        <img src="/img/research_filtering_trace.png"  width="350" />
        <p style="text-align:center;">filtering the whole spectrum</p>
    </div>
</div>
</center>

>*Related works*
>- Algorithms for Quantum Simulation at Finite Energies, *Sirui Lu, Mari Carmen Bañuls, and J. Ignacio Cirac*, [PRX Quantum <b>2</b>, 020321](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.020321)
>- Approximating the long time average of the density operator: Diagonal ensemble, *Aslı Çakan, J. Ignacio Cirac, and Mari Carmen Bañuls*, [Phys. Rev. B <b>103</b>, 115113](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.115113)

<br>
<br>




