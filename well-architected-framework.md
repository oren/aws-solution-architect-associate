# Summary of AWS Well-Architected Framework
* PDF, Jun 2018

## Table of Contents
```
1. Introduction
  Definitions
  On Architecture
  General Design Principles
2. The Five Pillars of the Well-Architected Framework
  Operational Excellence
  Security
  Reliability
  Performance Efficiency
  Cost Optimization
3. The Review Process
4. Conclusion
5. Further Reading
6. Appendix: Well-Architected Questions, Answers, and Best Practices
  Operational Excellence
  Security
  Reliability
  Performance Efficiency
  Cost Optimization
```

## 1. Introduction
### 1.1 Definitions
* Five pillars: OE, Security, Reliability, Performance Efficiency, Cost Optimization.
* The first two are not traded-of against the others.

### 1.2 On Architecture
Each team should have the expertise to evaluate and build robust solution on top of AWS. The key for doing it is set of practices and mechanisms. Well-Architected Framework (I'll call it WAF from now on) is the main mechanism. It allows CTOs and other tech leaders evaluate, compare, and identify gaps and needs across the organization.

### 1.3 General Design Principles
* Use only the resources you need thanks to auto scaling of cloud resources.
* Test systems at production scale thanks to on-demand infrastructure.
* Automate to increases your ability to experiment.
* Adapt to business needs thanks to automation and on-demand resources.
* Drive architectures using data.
* Simulate production cheaper and faster.

## 2. The Five Pillars of the Well-Architected Framework
### 2.1 Operational Excellence
Design Principles:
* Infrastructure as code
* Annotate documentation
* Improve your processes
* Test failure scenarios and your response processes
* Learn and share your learning with the organization

#### Services
CloudFormation, AWS Config, AWS Config rules (standards for workloads), CloudWatch, ElasticSearch (analyze logs)

### 2.2 Security
Design Principles:
* Separate duties and give minimal access.
* Enable traceability.
* Apply security in all layers.
* Automate security best practices.
* Protect data in transit and at rest.
* Keep people away from data.
* Prepare for security events.

### 2.3 Reliability
Design Principles:
* Test recovery procedures
* Automatic recovery
* Scale horizontally
* Provision resources accurately
* Manage change with automation

#### Services
General service for reliability: Amazon CloudWatch
* Foundations: IAM, VPC, AWS Trusted Advisor, AWS Shield
* Change Management: CloudTrail, AWS Config, Auto Scaling, CloudWatch
* Failure Management: AWS CloudFormation, S3 for backups, Glacier for archives, AWS KMS.

### 2.4 Performance Efficiency
Design Principles:
* Avoid implementing solutions that exist as cloud services
* Deploy your system to multiple regions quickly
* Use serverless architecture
* Experiment
* Choose the right technology for your use-case

### 2.5 Cost Optimization
* Adopt a consumption model
* Measure overall efficiency
* Stop spending money on data center operations
* Analyze and attribute expenditure
* Use managed and application level services to reduce cost of ownership

### Services
* Cost-effective Resources: Cost Explorer - RI recommendations and more. CloudWatch and Trust Advisor. Aurora - remove licensing costs. AWS Direct Connect and Amazon CloudFront to optimize data transfer.
* Match supply and demand: Auto Scaling.
* Expenditure Awareness: Cost Explorer to track usage. AWS Budgets - get notify if expanses are above a threshold.
* Optimizing Over Time: AWS News Blog, What's new section, and AwS Trusted Advisor.

## 3. Review Process 

## 4. Questions, Answers, and Best Practices
### 4.1 Operational Excellence
#### 4.1.1 Prepare
**OPS 1 What factors drive your operational priorities?**

Operational priorities are the focus areas of your operations efforts. Clearly define and agree to
your operations priorities to maximize the benefits of your operations efforts.

Best practices:
* Evaluate business needs: Involve both business and development teams when setting
operational priorities to ensure that you have a thorough understanding of what
operational support is required to achieve business outcomes.
* Evaluate compliance requirements: Consider external factors, such as regulatory
compliance requirements and industry standards to ensure you are aware of potential
obligations that may mandate or emphasize specific operational priorities.
* Evaluate risk: Operational priorities are frequently tradeoffs between competing interests.
For example, accelerating speed to market for new features may be emphasized over cost
optimization. Consider risks against potential benefits to ensure you are making informed
decisions when setting your operational priorities.

**OPS 2 How do you design your workload to enable operability?**

The majority of the lifetime of a workload is typically spent in an operating state. Consider
operations needs as a part of system design to help you enable long term sustainment of your
workload.

Best practices:
* Share design standards: Share existing best practices, guidance, and governance
requirements across teams, and include shared design standards in system design to
reduce complexity and maximize the benefits from development efforts. Ensure that
procedures exist to request changes, additions, and exceptions to design standards to
support continual improvement and innovation.
* Design for cloud operations: Leverage features of cloud environments in your workload
design (e.g. elasticity, on-demand scalability, pay-as-you-go pricing, automation) to
enable operations capabilities such as rapid improvement iterations and lower risk
experimentation.
* Provide insights into workload behavior: Build instrumentation into your system design
(for example logs, metrics, and counters) to enable your understanding what is going
on in the system and allow you to measure performance of the system across individual
components.
* Provide insights into customer behavior: Build instrumentation into your system design
(for example logs, metrics, and counters) to enable your understanding of how the
customer uses the system and the quality of the customer experience.
* Implement practices that reduce defects, ease remediation, and improve flow: Adopt
approaches that improve flow and that enable fast feedback on quality, refactoring,
and bug fixing to help you to rapidly identify and remediate issues introduced through
deployment activities.
* Mitigate deployment risks: Use approaches such as frequent small reversible changes,
automated deployments, testing, canary or one-box deployments, blue-green, etc. to help
you to limit the impact of issues introduced through the implementation of changes and
enable rapid recovery.

**OPS 3 How do you know that you are ready to support a workload?**

Evaluate the operational readiness of your workload, processes and procedures, and personnel
to help you understand the operational risks related to your workload.

Best practices:
* Continuous improvement culture: Cultivate a continuous improvement culture to
empower your personnel to identify and act upon opportunities for improvement. Develop
a continuous improvement culture by emphasizing that change is constant, that failure is
expected, and that improvement and innovation are achieved through experimentation.
Provide a safe environment for experimentation where it is accepted that experiments do
not always achieve desired outcomes.
* Share understanding of the value to the business: Have cross-team understanding of
the criticality of the workload to the business with procedures to engage across teams for
resources when needed to help you address operational issues.
* Ensure personnel capability: Have a mechanism to validate that you have an appropriate
number of trained personnel to provide support for operational needs. Train personnel
and adjust personnel capacity as necessary to maintain effective support.
* Documented accessible governance and guidance: Publish standards that are accessible,
readily understood, and are measurable for compliance to help guide and educate your
personnel enabling their compliance. Ensure that procedures exist to request changes,
additions, and exceptions to standards to support continual improvement and innovation.
* Use checklists: Use checklists to ensure you have a consistent evaluation of your readiness
to operate a workload. Checklists should include at a minimum the operational readiness
of the teams and the workload, and security considerations. Checklist elements may
be hard requirements or risk based decisions may be made to operate a workload that
does not satisfy all requirements. Checklist elements may be specific to a workload,
architecture, or may be implementation dependent. Script and automate checklists where
appropriate to ensure consistency, speed execution, and limit human error.
* Use runbooks: Have runbooks to help enable consistent and prompt responses to wellunderstood
events through documented procedures to achieve specific outcomes.
Effective procedures should contain the minimum information for an adequately skilled
person to achieve a desired outcome. Script and automate runbooks where appropriate to
ensure consistency, speed responses, and limit human error.
* Use playbooks: Have playbooks to help enable consistent and prompt responses to failure
scenarios by documenting the processes to identify underlying issues. Effective processes
should guide an adequately skilled person through identifying potential sources of failure,
isolating faults, determining root cause, and remediation. Script and automate playbooks
where appropriate to ensure consistency, speed responses, and limit human error.
* Practice recovery: Identify potential failure scenarios, remove the sources of failure where
possible, develop and test responses to failures to limit their impact when they occur and
help ensure prompt and effective responses.


#### 4.1.2 Operate
**OPS 4 What factors drive your understanding of operational health?**

Define metrics for the evaluation of your workload and processes to help you understand
operations effectiveness in supporting business outcomes. Capture and analyze metrics to gain
visibility to processes and events so that you can take appropriate action.

Best practices:
* Define expected business and customer outcomes: Have a documented definition of
what success looks like for the workload from a business and customer perspective to use
as evaluation criteria when evaluating operations success.
* Identify success metrics: Define metrics to measure the behavior of the workload against
business and customer expectations to know if your workload is achieving them.
* Identify workload metrics: Define metrics to measure the status of the workload and its
components against the success metrics to know if your workload is achieving them.
* Identify operations metrics: Define metrics to measure the execution of operations
activities (runbooks and playbooks) to know if you are achieving operational outcomes
that support the business needs.
* Established baselines: Establish baselines for metrics to provide expected values as the
basis for comparisons.
* Collect and analyze metrics: Perform regular proactive reviews of metrics to identify
trends and determine where appropriate responses are needed.
* Validate insights: Review your analysis results and responses with cross-functional teams
and business owners to help establish common understanding, identify additional impacts,
and determine courses of action. Adjust responses as appropriate.
* Business-level view of operations: Create a business-level view of operations to help you
determine if you are satisfying needs and to help identify areas that need improvement to
reach business goals.

**OPS 5 How do you manage operational events?**

Prepare and validate procedures to respond to operational events to help you minimize their
potential disruption to your workload.

Best practices:
* Determine priority of operational events based on business impact: Base the priority
of events on business impact to ensure that when multiple events require intervention
those that are most significant to the business are addressed first. For example impacts
can include loss of life or injury, financial loss, or damage to reputation or trust.
* Processes for event, incident, and problem management: Have processes to address
observed events, events that require intervention (incidents), and events that require
intervention and either recur or cannot currently be resolved (problems). Use these
processes to help you to mitigate the impact of those events on the business and your
customers by ensuring timely and appropriate responses.
* Process per alert: Have a well-defined response (runbook or playbook), with a specifically
identified owner, for any event for which you raise an alert. By doing so you ensure
effective and prompt responses to operations events and prevent actionable events from
being obscured by less valuable notifications.
* Identify decision makers: Identify decision makers who are empowered to determine
operations actions on behalf of their organizations. Escalate to decision makers as
appropriate when operations activities may impact their business outcomes to ensure
informed decisions. Runbooks and playbooks should be pre-approved by decision makers
where appropriate to ensure prompt responses to events.
* Defined escalation paths: Defined escalation paths in your runbooks and playbooks
including what triggers escalation, procedures for escalation, and specifically identify
owners for each action, to help ensure effective and prompt responses to operations
events. Escalations may include third parties.
* Push notifications: Direct communications to your users (for example, with email or SMS)
when the services they consume are impacted, and when they return to normal operating
conditions, to enable them to take appropriate action in response.
* Communicate status through dashboards: Provide dashboards tailored to their
target audiences (for example, internal technical teams, leadership, and customers) to
communicate the current operating status of the business and provide metrics of interest.
Examples include Amazon CloudWatch dashboards, AWS Personal Health Dashboard, and
Service Health Dashboard.
* Process for root cause analysis: Have a process to identify and document the root cause
of an event so that you can develop mitigations to limit or prevent recurrence and you
can develop procedures for prompt and effective responses. Communicated root cause as
appropriate, tailored to target audiences.

#### 4.1.3 Evolve
**OPS 6 How do you evolve operations?**

Dedicate time and resources for continuous incremental improvement to help evolve the
effectiveness and efficiency of your operations.

Best practices:
* Process for continuous improvement: Dedicated time and resources within your
operations processes to make continuous incremental improvements possible. Regularly
evaluate and prioritize opportunities for improvement to help focus resources where they
will have the greatest benefits.
* Define drivers for improvement: Identify your drivers for improvement to help you
evaluate and prioritize opportunities. Evaluate opportunities for improvement by
considering desired features, capabilities, and improvements; unacceptable issues, bugs,
and vulnerabilities; and updates required to maintain compliance with policy or support
from a third party.
* Implement Feedback loops: Include feedback loops in your procedures to help enable
your identification of issues and areas in need of improvement.
* Document and share lessons learned: Document and share lessons learned from the
execution of operations activities so that you can leverage them internally and across
teams. Analyze trends in lessons learned to identify issues and areas to investigate for
improvement opportunities.
* Perform operations metrics reviews: Regularly perform retrospective analysis of
operations metrics with cross-team participants from different areas of the business to
identify opportunities for improvement, potential courses of action, and to share lessons
learned.
