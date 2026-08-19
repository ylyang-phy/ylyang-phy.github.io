---
title: "Methods for quantum simulation"
date: 2024-05-28

---

Quantum simulation is among the most promising frontiers of quantum computing. We aim to design methods that lead to practical applications on current and near-term quantum devices.

<br>

## Ancilla-free measurement of complex quantum amplitudes
- - -

{{% container image="right" %}}

- [1] **Phase-Sensitive Quantum Measurement without Controlled Operations**
<br /> <span style="color: salmon">***Y. Yang***</span>, *A. Christianen, M. C. Bañuls, D. S. Wild, and J. I. Cirac*,  [Phys. Rev. Lett. **132**, 220601 (2024)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.220601)

{{% columns float=right %}}
{{< figure src="/img/research_PSQM.png" >}}

{{% /columns %}}

{{% research-description %}}

The Loschmidt amplitude, a complex number of the form  \( \langle \psi' | e^{-iHt} |\psi \rangle \), occurs naturally in various quantum algorithms, study of quantum chaos, and so on. Compared with its absolute value, the complex phase is relatively hard to extract on quantum computers. The standard method is the Hadamard test, which gives rise to large overheads due to the need for global controlled-unitary operations. We introduce a quantum algorithm based on complex analysis that overcomes this problem: ***no*** ancillary qubits, ***no*** control operations, only time evolution required.

{{% /research-description %}}

{{% /container %}}

## Error-mitigated digital quantum simulation of thermalization
- - -

{{% container image="left" %}}

- [2] **Simulating Prethermalization Using Near-Term Quantum Computers**
<br />
<span style="color: salmon">***Y. Yang***</span>, *A. Christianen, S. Coll-Vinent, V. Smelyanskiy, M. C. Bañuls, T. E. O&prime;Brien, D. S. Wild, and J. I. Cirac*, [PRX Quantum **4**, 030320 (2023)](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.4.030320)

{{% columns float=left %}}
{{< figure src="/img/research_PEVP.png" >}}

{{% /columns %}}

{{% research-description %}}

Due to decoherence and noise in current devices, it is currently challenging to perform digital quantum simulation in a regime that is intractable with classical computers. In this work, we propose a practical experimental protocol for probing dynamics and equilibrium properties on near-term digital quantum computers, based on the ***prethermalization*** phenomenon and a proposed ***error mitigation*** scheme.

{{% /research-description %}}

{{% /container %}}
