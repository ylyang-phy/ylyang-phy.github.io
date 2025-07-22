---
title: " "

---

<div style="max-width: 1300px"> 

<style>       
    p.clearboth { 
        clear: both; 
    } 
</style> 
  
## Ancilla-free phase measurement of complex quantum amplitudes
- - -
{{% container %}}


{{% columns float=right %}}
<br>
<center>{{< figure src="/img/research_PSQM.png" width="400" >}} </center>

{{% /columns %}}

- **Phase-Sensitive Quantum Measurement without Controlled Operations**
<br /> <span style="color: salmon">***Y. Yang***</span>, *A. Christianen, M. C. Bañuls, D. S. Wild, and J. I. Cirac*, 
<br /> [Phys. Rev. Lett. **132**, 220601](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.220601)
    
 
The Loschmidt amplitude \( \mathcal{G}(t) =  \langle \psi^{\prime} | e^{-iH t} | \psi \rangle \) including the complex phase has broad applications in quantum computation, study of quantum chaos and so on. The standard way to extract the phase information is the Hadamard test, which gives rise to large overheads due to the need for global controlled-unitary operations. We introduce a quantum algorithm based on complex analysis that overcomes this problem: ***no*** ancillary qubits, ***no*** control operations, only time evolution required.  

{{% /container %}}

<br>
<p class="clearboth">
	&nbsp;
</p>




## Error-mitigated digital quantum simulation of thermalization
- - -

{{% container %}}
{{% columns float=left %}}

<br>
<center>{{< figure src="/img/research_PEVP.png" width="400" >}} </center>

{{% /columns %}}


- **Simulating Prethermalization Using Near-Term Quantum Computers**
<br />
<span style="color: salmon">***Y. Yang***</span>, *A. Christianen, S. Coll-Vinent, V. Smelyanskiy, M. C. Bañuls, T. E. O&prime;Brien, D. S. Wild, and J. I. Cirac*, 
<br /> [PRX Quantum **4**, 030320](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.4.030320)

 Due to decoherence and noise in current devices, it is currently challenging to perform digital quantum simulation in a regime that is intractable with classical computers. In this work, we propose a practical experimental protocol for probing dynamics and equilibrium properties on near-term digital quantum computers, based on the ***prethermalization*** phenomenon and a proposed ***error mitigation*** scheme.

{{% /container %}}



<br>
<p class="clearboth">
	&nbsp;
</p>


## Thermalization probes of many body systems with energy filters
- - - 


{{% container %}}

{{% columns float=right %}}

<br>
<center>{{< figure src="/img/research_filtering_state.png" width="400" >}} </center>
<center>{{< figure src="/img/research_filtering_trace.png" width="400" >}} </center>

{{% /columns %}}

- **Probing Thermalization through Spectral Analysis with Matrix Product Operators**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *S. Iblisdir, J. I. Cirac, and M. C. Bañuls*
  <br /> [Phys. Rev. Lett. **124**, 100602](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.100602)

- **Classical algorithms for many-body quantum systems at finite energies**
  <br />
  <span style="color: salmon">***Y. Yang***</span>, *J. I. Cirac, and M. C. Bañuls*
  <br /> [Phys. Rev. B **106**, 024307 (*Editor&prime;s suggestion*)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.024307)

The ***microcanonical ensembles*** at finite energy densities have many applications in many body physics. It enables studying the long time behaviors of given initial states and helps to probe the out-of-equilibrium phenomena. Unlike the canonical ensembles, no standard algorithm previously exists for computing microcanonical ensemble properties.

We develop a technique to solve this problem using ***energy filters*** that can be applied to both fixed initial states and the whole spectrum. A (Gaussian) filter
\(P_{\delta} (E) = \exp[-(E-H)^2 / 2\delta^2]\) as a energy projector can filter out irrelevant energy eigenstates and thus obtain the microcanonical ensemble. Such filters can be efficiently implemented with tensor networks in one-dimensional systems, by expanding it with the Chebyshev or Fourier series.

{{% /container %}}


>*Related works*
>- (Quantum algorithm) **Algorithms for Quantum Simulation at Finite Energies**, *S. Lu, M. C. Bañuls, and J. I. Cirac*, [PRX Quantum **2**, 020321](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.020321)
>- (Diagonal ensemble) **Approximating the long time average of the density operator: Diagonal ensemble**, *A. Çakan, J. I. Cirac, and M. C. Bañuls*, [Phys. Rev. B **103**, 115113](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.115113)
>- (Off-diagonal ETH) **Probing off-diagonal eigenstate thermalization with tensor networks**, *M. Luo, R. Trivedi, M. C. Bañuls, and J. I. Cirac*, [Phys. Rev. B **109**, 134304](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.109.134304)
>- (Experiment) **Measuring the Loschmidt Amplitude for Finite-Energy Properties of the Fermi-Hubbard Model on an Ion-Trap Quantum Computer**, *K. Hémery, et al.*, [PRX Quantum **5**, 030323](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.030323)

</div>