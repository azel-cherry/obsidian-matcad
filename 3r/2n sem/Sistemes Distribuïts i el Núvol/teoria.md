# Distributed Systems

## 1. Introduction

A distributed system is a collection of computers that appear as a single coherent system. It's characterized by:

+ ~={green}Concurrency.=~ Multiple components access a shared resource simultaneously.
+ ~={green}Absence of global clock.=~ Coordination between components needs timing mechanisms.
+ ~={green}Handling independent failures.=~
	+ **Network:** network isolation
	+ **Hardware:** machine crashes
	+ **Software:** abnormal program termination


#### Challenges in DSs

```ad-prop
title: Heterogeniety

The **diverse components differ** in architecture, OSs, hardware, networks, communication protocols and data models. This icludes different machines (PCs, servers, mobile devices,...), software platforms and networking technologies.
```

```ad-prop
title: Openness

Ability of the system to be **extended and reimplemented**, achieved **through a uniform communication mechanism**.
```

```ad-prop
title: Security

+ ~={green}Confidentiality.=~ Preventing **unauthorized parties** from **reading** data.
+ ~={green}Integrity.=~ Preventing **unauthorized modifications** to data.
+ ~={green}Availability.=~ Ensuring **reliable access** and preventing disruptions.
```

```ad-prop
title: Scalability

Ability to **handle increasing workload** while maintaining performance.
+ ~={green}Vertical.=~ Increase server's **capacity**.
+ ~={green}Horizontal.=~ Increase **number** of servers.

~={green}Elasticity=~ refers to automatic scaling in real time. 
```

`````ad-prop
title: Failure handling

Ability to **keep workig** even in case of **errors**.

```mehrmaid
graph LR;
FT("**Fault**:<br>Unexpected behavior$\,$")
E("**Error:**<br>Invalid state$\,\,$")
FR("**Failure:**<br>System is down$\,$")
C("System is down")
BF("Component behaves<br>arbitrarily")

FT --> E --> FR -- "Crash$\,$" --> C
FR -- "Byzantine$\,$<br>failure" --> BF
```

Achieved through:
+ ~={green}Monitoring.=~ Closely moitoring system health and automating tests.
+ ~={green}Rollback capability.=~ Being able  to revert to a previous stable state.
+ ~={green}Security.=~
+ ~={green}Redundancy.=~ Using **replication** to ensure continuous availability and achieve **fault tolerance**. If we have $n$ servers:
	+ **Crash:** Up to $n-1$ can fail without disruption.
	+ **Byzantine failure:** $n=3f+1$ to tolerate $f$ failures.
  
````ad-prop
title: Replication

Maintaining copies of data on multiple computers. Simple but results in coordination costs.
+ ~={green-low}Passive replication.=~ Primary node processes transactions and sends updates to secondary nodes. In case of failure on the primary node, another node takes its role.
	  
```mehrmaid
graph LR;
FE("Front end$\,$")
PN("Primary node$\,$")
SN1("Secondary node$\,$")
SN2("Secondary node$\,$")

FE --> PN --> SN1
PN --> SN2
```

+ ~={green-low}Active replication.=~ Transactions are sent to all nodes concurrently and is processed independently.
	  
```mehrmaid
graph LR;
FE("Front end$\,$")
N1("Replica$\,$")
N2("Replica$\,$")
N3("Replica$\,$")

FE --> N1
FE --> N2
FE --> N3
```
````
`````

```ad-prop
title: Concurrency

Allowing multiple tasks to be executed simultaneously.

+ ~={green}Optimistic concurrency.=~ Assumes conflicts are unlikely.
	+ ~={green-low}Execution.=~ Transactions are executed locally.
	+ ~={green-low}Validation.=~ System checks for interferences before committing.
	+ ~={green-low}Write.=~ If it passes validation, the changes are applied. Otherwise they are discarded and the transaction is restarted.

+ ~={green}Pessimistic concurrency.=~ Assumes conflicts are likely. Resources are locked if an operation is underway. When another process tries to access the locked rescoure, it must wait. Lock is released when transaction is finished.
```

```ad-prop
title: Transparency

Hiding details of remote resource management. Makes the system more user-friendly, but may result in inefficiencies.

+ ~={green}Access transparency.=~
+ ~={green}Location transparency.=~
+ ~={green}Concurrency transparency.=~
```

---

## 2. Cloud computing

```ad-prop
title: Computing **infrastructure**

> Equipment for data storage, processing and connectivity.

| On-Premise                                                                                                                                                                      | Data Center                                                                                                                                                                                  | Cloud Computing                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Located within an organization's facility.<ul><li>High customization<li>Requires space, staff, capital, planning and maintenance<li>Low flexibility (theoretical maximum peaks) | Centralized facility with dedicated infrastructure.<ul><li>High customization and security<li>Predictable performance (no sharing with 3rd parties)<li>Low flexibility<li>Complex management | Virtualized data centers with scalable infrasturcture.<ul><li>Scalable; pay-as-you-go<li>The provider is responsible for maintaining the resources<li>"Thinking in software" |
```

```ad-prop
title: Cloud **models**

+ **Infrastructure (IaaS):** Virtualized resources (servers, storage, network).
+ **Platform (PaaS):** Building and managing applications for developers.
+ **Function (FaaS):** Running code snippets for developers.
+ **Application/Software (AaaS/SaaS):** Software applications for end-users.

These models can be used independently or combined.
```
