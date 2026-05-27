---
sidebar_position: 3
title: Aim & Objectives
---

# Aim and Objectives

## Aim

> To design, implement, and rigorously evaluate a data-driven passenger demand forecasting model for Sri Lankan public transport, thereby producing the predictive foundation on which future planning and accessibility-improvement work can build.

---

## Objectives

```mermaid
flowchart TD
    O1["O1 — Data Preparation\nMulti-source dataset · Feature identification\nAddresses RQ1"]:::obj
    O2["O2 — Method Selection\nComparative experimentation\nStatistical · ML · DL\nAddresses RQ2"]:::obj
    O3["O3 — Model Design & Development\nIntegrate features + selected methods\nAddresses RQ3"]:::obj
    O4["O4 — Evaluation\nLocal Sri Lankan data +\nGlobal transit benchmarks\nAddresses RQ4"]:::obj
    O5["O5 — Documentation\nFindings · Limitations\nFuture work recommendations"]:::obj

    O1 --> O2 --> O3 --> O4 --> O5

    RQ1["RQ1\nFeature identification"] -.-> O1
    RQ2["RQ2\nMethod selection"] -.-> O2
    RQ3["RQ3\nModel design"] -.-> O3
    RQ4["RQ4\nEvaluation"] -.-> O4

    classDef obj fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
```

| Objective | Addresses | Description |
|---|---|---|
| **O1** | RQ1 | Compile and pre-process a multi-source dataset (ridership, GPS/AVL, weather, calendar, census) and identify the features that most strongly predict demand |
| **O2** | RQ2 | Investigate and select the forecasting methods best suited to the Sri Lankan context through comparative experimentation across statistical, ML, and DL families |
| **O3** | RQ3 | Design and develop a demand forecasting model integrating the identified features with the selected methods |
| **O4** | RQ4 | Evaluate the model on both local Sri Lankan data and publicly available global transit datasets |
| **O5** | — | Document findings, limitations, and recommendations for future work |

---

## Scope of inquiry

The research is bounded to:

- **Forecast levels:** route-level and stop-level demand (not network-wide totals)
- **Horizons:** short-term (hourly/daily) and long-term (weekly and longer)
- **Corridors:** a selected set of representative routes covering urban, suburban, and inter-provincial settings
- **Deliverable:** a developed and evaluated forecasting model

See [Scope & Delimitations](./scope) for the full breakdown of what is and isn't covered.
