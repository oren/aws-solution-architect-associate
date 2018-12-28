# Summary of AWS Well-Architected Framework
* PDF, Jun 2018
* The first PDF on this page: https://aws.amazon.com/architecture/well-architected

## Table of Contents

  * [Table of Contents](#table-of-contents)
  * [1\. Introduction](#1-introduction)
    * [1\.1 Definitions](#11-definitions)
    * [1\.2 On Architecture](#12-on-architecture)
    * [1\.3 General Design Principles](#13-general-design-principles)
  * [2\. The Five Pillars of the Well\-Architected Framework](#2-the-five-pillars-of-the-well-architected-framework)
    * [2\.1 Operational Excellence](#21-operational-excellence)
      * [Services](#services)
    * [2\.2 Security](#22-security)
    * [2\.3 Reliability](#23-reliability)
      * [Services](#services-1)
    * [2\.4 Performance Efficiency](#24-performance-efficiency)
    * [2\.5 Cost Optimization](#25-cost-optimization)
    * [Services](#services-2)
  * [3\. Questions, Answers, and Best Practices](#3-questions-answers-and-best-practices)
    * [3\.1 Operational Excellence](#31-operational-excellence)
      * [3\.1\.1 Prepare](#311-prepare)
      * [3\.1\.2 Operate](#312-operate)
      * [3\.1\.3 Evolve](#313-evolve)
    * [3\.2 Security](#32-security)
      * [3\.2\.1 Identity and Access Management](#321-identity-and-access-management)
      * [3\.2\.2 Detective Controls](#322-detective-controls)
      * [3\.2\.3 Infrastructure Protection](#323-infrastructure-protection)
      * [3\.2\.4 Data Protection](#324-data-protection)
      * [3\.2\.4 Incident Response](#324-incident-response)
    * [3\.3 Reliability](#33-reliability)
      * [3\.3\.1 Foundations](#331-foundations)
      * [3\.3\.2 Change Management](#332-change-management)
      * [3\.3\.2 Failure Management](#332-failure-management)
    * [3\.4 Performance Efficiency](#34-performance-efficiency)
      * [3\.4\.1 Selection](#341-selection)
      * [3\.4\.2 Review](#342-review)
      * [3\.4\.3 Tradeoffs](#343-tradeoffs)
    * [3\.5 Cost Optimization](#35-cost-optimization)
      * [3\.5\.1 Cost\-Effective Resources](#351-cost-effective-resources)
      * [3\.5\.2 Matching supply and demand](#352-matching-supply-and-demand)
      * [3\.5\.3 Optimizing Over Time](#353-optimizing-over-time)

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

## 3. Questions, Answers, and Best Practices
### 3.1 Operational Excellence
#### 3.1.1 Prepare
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

#### 3.1.2 Operate
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

#### 3.1.3 Evolve
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

### 3.2 Security
#### 3.2.1 Identity and Access Management
**SEC 1 How do you manage credentials for your workload?**

Credentials include passwords, tokens, and keys that grant access directly or indirectly to
manage your workload. Protect credentials with appropriate mechanisms to help you reduce
the risk of accidental or malicious use.

Best practices:
* Enforce use of multi-factor authentication (MFA): Enforce multi-factor authentication
(MFA) with software or hardware tokens to provide additional access control.
* Enforce password requirements: Enforce the minimum length and complexity of
passwords to help protect against brute force and other password attacks.
* Rotate credentials regularly: Rotate credentials regularly to help reduce the risk of old
credentials being used by previous systems or personnel.
* Audit credentials periodically: Audit credentials to ensure the appropriate controls (eg
MFA) are enforced, are rotated regularly and appropriate access level.
* Using centralized identity provider: An identity provider or directory service is used to
authenticate users in a centralized place, reducing the requirement for multiple credentials
and management complexity.

**SEC 2 How do you control human access to services?**

Control human access to services with appropriately defined, limited, and segregated access to
help you reduce the risk of unauthorized access.

Best practices:
* Credentials are not shared: Credentials are not shared between any users to help
segregation of users and traceability.
* User life-cycle managed: Access is managed through employee life-cycle policies to grant
only valid users access.
* Minimum privileges: Users are granted only the minimum privileges needed to
accomplish their job to reduce the risk of unauthorized access.
* Access requirements clearly defined: Access requirements are clearly defined for user's
job function or role to reduce the risk of unnecessary privileges.
* Access is granted through roles or federation: Using Roles allow for secure cross-account
access and federated users.

**SEC 3 How do you control programmatic access to services?**

Control programmatic or automated access to services with appropriately limited short-term
credentials and roles to help you reduce the risk of unauthorized access.

Best practices:
* Credentials are not shared: Credentials are not shared for programmatic access between
any systems.
* Dynamic authentication: Credentials are dynamically acquired and frequently rotated
from a service or system.
* Minimum privileges: Programmatic access requirements are clearly defined with only
minimum privileges granted to the system to reduce the risk of unauthorized access.
* Access requirements clearly defined: Access requirements are clearly defined to reduce
the risk of unnecessary privileges.

#### 3.2.2 Detective Controls
**SEC 4 How are you aware of security events in your workload?**

Capture and analyze logs and metrics to gain visibility to security threats and events so that
you can take appropriate action.

Best practices:
* Logging enabled where available: Enabling logging for all services and functions
improves visibility of events.
* Analyzing AWS CloudTrail: CloudTrail trails should be automatically analyzed for
suspicious behavior.
* Analyzing logs centrally: All logs should be collected centrally and automatically analyzed
to detect suspicious behavior.
* Monitoring and alerting for key metrics and events: Key metrics and events related to
security should be monitored with automated alerts.
* AWS marketplace or APN partner solution enabled: A solution from the AWS
Marketplace or from an APN Partner.

#### 3.2.3 Infrastructure Protection
**SEC 5 How do you protect your networks?**

Public and private networks and services require multiple layers of defense to help protect your
workloads from network-based threats.

Best practices:
* Controlling traffic in Virtual Private Cloud (VPC): Using a VPC to isolate and control
workload traffic.
* Controlling traffic at the boundary: Control traffic at the boundary or network edge of
the workload to take advantage of the first opportunity to control traffic and provide a
layer of protection.
* Controlling traffic using available features: Controlling traffic using available features,
including security groups, Network ACLs and subnets, adds layers of protection.
* AWS marketplace or APN partner solution enabled: A solution from the AWS
Marketplace or from an APN Partner.
SEC 6 How do you stay up to date with AWS security features and industry security
threats?
Staying up to date and implementing AWS and industry best practices including services and
features can improve the security of your workload. Being aware of the latest security threats
will help you build a threat model to identify and implement protective controls.
Best practices:
* Evaluating new security services and features: Explore security services and features as
they are released to identify appropriate protections to improve your security posture.
* Using security services and features: Adopting the use of security services and features
will help you implement controls to protect your workload.

**SEC 6 How do you stay up to date with AWS security features and industry security threats?**

Staying up to date and implementing AWS and industry best practices including services and
features can improve the security of your workload. Being aware of the latest security threats
will help you build a threat model to identify and implement protective controls.

Best practices:
* Evaluating new security services and features: Explore security services and features as
they are released to identify appropriate protections to improve your security posture.
* Using security services and features: Adopting the use of security services and features
will help you implement controls to protect your workload.

**SEC 7 How do you protect your compute resources?**

Configure compute resources with manageable components to protect and monitor their
integrity so that you can take appropriate action.

Best practices:
* Hardening default configurations: Configure and harden compute resources to meet your
requirements to help improve the security of your compute.
* Checking file integrity: Perform file integrity checking to gain visibility of unauthorized
changes so that you can take appropriate action.
* Intrusion detection enabled: Intrusion detection controls including host-based agents
provide additional visibility.
* AWS marketplace or APN partner solution enabled: A solution from the AWS
Marketplace or from an APN Partner.
* Configuration management tool: Enforce secure configurations by default automatically
by using a configuration management service or tool.
* Patching and scanning for vulnerabilities: Apply patches regularly and scan for
vulnerabilities using a tool to help protect against new threats.

#### 3.2.4 Data Protection

SEC 8 How do you classify your data?
Classification provides a way to categorize data, based on levels of sensitivity, to help you
determine appropriate protective controls.

Best practices:
* Use a data classification schema: Classify data with a data classification schema.
* Data classification applied: Data is protected according to its classification in the schema.

**SEC 9 How do you manage data protection mechanisms?**

Data protection mechanisms include services and keys that protect data in transit and at rest.
Protect these services and keys to help you reduce the risk of unauthorized access to systems
and data.

Best practices:
* Use a secure key management service: Using a key management service such as AWS
KMS or CloudHSM.
* Use service level controls: Using built-in service level controls such as Amazon S3
encryption with KMS managed keys.
* Use client side key management: We manage keys using client side techniques.
* AWS Marketplace or APN Partner solution: Using an AWS Marketplace or APN Partner
solution.

**SEC 10 How do you protect your data at rest?**

Protecting your data at rest reduces the risk of unauthorized access or loss.

Best practices:
* Encrypting at rest: Data at rest is encrypted.

**SEC 11 How do you protect your data in transit?**

Protecting your data in transit reduces the risk of unauthorized access or exposure.

Best practices:
* Encrypting in transit: TLS or equivalent is used for communication as appropriate.
Incident Response
SEC 12 How do you prepare to respond to an incident?
Prepare to investigate and respond to security incidents to help you minimize potential
disruptions to your workload.
Best practices:
* Pre-provisioned access: InfoSec has the right access or can gain access quickly. This access
should be pre-provisioned so that an appropriate response can be made to an incident.
* Pre-deployed tools: InfoSec has the right tools pre-deployed into AWS so that an
appropriate response can be made to an incident.
* Run game days: Incident response simulations are conducted regularly, and lessons
learned are incorporated into the architecture and operations.

#### 3.2.4 Incident Response
**SEC 12 How do you prepare to respond to an incident?**

Prepare to investigate and respond to security incidents to help you minimize potential
disruptions to your workload.

Best practices:
* Pre-provisioned access: InfoSec has the right access or can gain access quickly. This access
should be pre-provisioned so that an appropriate response can be made to an incident.
* Pre-deployed tools: InfoSec has the right tools pre-deployed into AWS so that an
appropriate response can be made to an incident.
* Run game days: Incident response simulations are conducted regularly, and lessons
learned are incorporated into the architecture and operations.

### 3.3 Reliability
#### 3.3.1 Foundations
**REL 1 How are you managing AWS service limits for your accounts?**

AWS accounts are provisioned with default service limits to prevent new users from
accidentally provisioning more resources than they need. There also limits on how often you
can call APIs to protect AWS infrastructure. Evaluate your AWS service needs and request
appropriate changes to your limits for each region.

Best practices:
* Active monitoring and managing limits: Evaluate your potential usage on AWS via
Amazon CloudWatch, or a third party product, increase your regional limits appropriately,
and allow planned growth in usage.
* Implemented automated monitoring and management of limits: Implement tools using
AWS SDKs to alert you when thresholds are being approached. If you have Enterprise
Support, you can also automate the limit increase request.
* Aware of fixed service limits: Be aware of unchangeable service limits and architect
around these.
* Ensure there is a sufficient gap between the current service limit and the max usage
to accommodate for fail over: A fail over is when a facility fails. In AWS, this may be an
isolation zone in your architecture, an Availability Zone (AZ), or an AWS Region. When a fail
over of an isolation zone or AZ occurs, your automation may make requests for resources
before the failed resources are terminated. This may cause you to exceed planned limits.
Ensure you can request resources for a failure of isolation zones before resources have
been fully decommissioned.
* Service limits are managed across all relevant accounts and regions: If you are using
multiple AWS accounts or AWS Regions, ensure you request the same limits in all
environments in which you run your production workloads.

**REL 2 How do you plan your network topology on AWS?**

Applications can exist in one or more environments: EC2-Classic, the default VPC, or VPC(s)
created by you. Network considerations such as system connectivity, Elastic IP address and
public IP address management, VPC and private address management, and name resolution
are fundamental to using resources in the cloud. Well planned and documented deployments
are essential to reduce the risk of overlap and contention.

Best practices:
* Connectivity back to data center is not needed: If you do not need connectivity to an
existing on-premises network, then planning can be simplified.
* Highly available connectivity between AWS and on-premises environment is
implemented: Use multiple Direct Connect circuits and multiple VPN tunnels. Use multiple
Direct Connect locations for high availability. If you use multiple AWS Regions, you will
also need multiple Direct Connect locations in at least 2 regions. You may want to evaluate
AWS Marketplace appliances that terminate VPNs. If you use AWS Marketplace appliances,
deploy redundant instances for high availability in different Availability Zones.
* Highly available network connectivity for the users of the workload is implemented:
Use a highly available DNS, load balancing, and/or reverse proxy as the public facing
endpoint of your application. You may want to evaluate AWS Marketplace appliances for
load balancing or proxying.
* Using non-overlapping private IP address ranges in multiple VPCs: The IP ranges of each
of your VPCs should not conflict if they are peered or connected via VPN. The same is true
for private connectivity to your on-premises environments and other cloud providers.
* IP subnet allocation accounts for expansion and availability: Individual Amazon VPC IP
address ranges should be large enough to accommodate an application’s requirements,
including factoring in future expansion and allocation of IP addresses to subnets across
Availability Zones. Additionally, keep some IP addresses available for possible future
expansion.

#### 3.3.2 Change Management
**REL 3 How does your system adapt to changes in demand?**

A scalable system provides elasticity to add and remove resources automatically so that they
closely match the current demand at any given point in time.

Best practices:
* Workload scales automatically: Use automatically scalable services, such as Amazon
S3, Amazon CloudFront, Auto Scaling, Amazon DynamoDB, Amazon Aurora, Elastic Load
Balancing, and AWS Lambda or automation created using third party tools and/or AWS
SDKs.
* Workload is load tested: Adopt a load testing methodology to measure if scaling activity
will meet workload requirements.


**REL 4 How do you monitor AWS resources?**

Logs and metrics are a powerful tool for gaining insight into the health of your workloads. You
can configure your system to monitor logs and metrics and send notifications when thresholds
are crossed or significant events occur. Ideally, when low-performance thresholds are crossed or
failures occur, the system has been architected to automatically self-heal or scale in response.

Best practices:
* Monitoring the workload in all tiers: Monitor the tiers of the workload with Amazon
CloudWatch or third-party tools. Monitor AWS services with Personal Health Dashboard.
* Notifications are sent based on the monitoring: Organizations that need to know receive
notifications when significant events occur.
* Automated responses are performed for events: Use automation to take action when an
event is detected; for example, to replace failed components.
* Reviews are conducted regularly: Frequently review the monitoring of the system based
on significant events and changes to evaluate the architecture and implementation.

**REL 5 How do you implement change?**

Uncontrolled changes to your environment make it difficult to predict the effect of a change.
Controlled changes to provisioned AWS resources and workloads are necessary to ensure that
the workloads and the operating environment are running known software and can be patched
or replaced in a predictable manner.

Best practices:
* Changes are deployed with automation: Deployments and patching are automated.

#### 3.3.2 Failure Management
**REL 6 How do you back up data?**

Back up data, applications, and operating environments (defined as operating systems
configured with applications) to meet requirements for mean time to recovery (MTTR) and
recovery point objectives (RPO).

Best practices:
* Data is backed up manually: Important data is backed up using Amazon S3, Amazon EBS
snapshots, or third- party software to meet RPO.
* Data is backed up using automated processes: Automate backups using AWS features (for
example, snapshots of Amazon RDS and Amazon EBS, versions on Amazon S3, etc.), AWS
Marketplace solutions, or third-party solutions.
* Periodic recovery of the data is done to verify backup integrity and processes: Validate
that your backup process implementation meets Recovery Time Objective and Recovery
Point Objective through a recovery test.
* Backups are secured and encrypted: See the AWS Security Best Practices whitepaper.

**REL 7 How does your system withstand component failures?**

If your workloads have a requirement, implicit or explicit, for high availability and low mean
time to recovery (MTTR), architect your workloads for resiliency and distribute your workloads
to withstand outages.

Best practices:
* Monitoring is done at all layers of the workload to detect failures: Continuously monitor
the health of your system and report degradation as well as complete failure.
* Deployed to multiple Availability Zones; Multiple AWS Regions if required: Distribute
workload load across multiple Availability Zones and AWS Regions (for example, DNS, ELB,
Application Load Balancer, API Gateway).
* Has loosely coupled dependencies: Dependencies such as queuing systems, streaming
systems, workflows, and load balancers are loosely coupled.
* Has implemented graceful degradation: When a component’s dependencies are
unhealthy, the component itself does not report as unhealthy. It can continue to serve
requests in a degraded manner.
* Automated healing implemented on all layers: Use automated capabilities upon
detection of failure to perform an action to remediate.
* Notifications are sent upon availability impacting events: Notifications are sent upon
detection of any significant events, even if it was automatically healed.

**REL 8 How do you test resilience?**
Test the resilience of your workload to help you find latent bugs that only surface in
production. Exercise these tests regularly.

Best practices:
* Use a playbook: Have a playbook for failure scenarios that have not been anticipated.
* Inject failures to test: Test failures regularly, ensuring coverage of failure pathways.
* Schedule game days: Use game days to regularly exercise your failure procedures.
* Conduct root cause analysis (RCA): Review system failures based on significant events to
evaluate the architecture and identify the root cause. Have a method of communicating
these causes to others as needed.

**REL 9 How do you plan for disaster recovery?**

Data recovery (DR) is critical should restoration of data be required from backup methods. Your
definition of and execution on the objectives, resources, locations, and functions of this data
must align with RTO and RPO objectives.

Best practices:
* Recovery objectives are defined: Recovery time objective (RTO) and recovery point
objective (RPO) are defined.
* Recovery strategy is defined: A disaster recovery (DR) strategy has been defined to meet
objectives.
* Configuration drift is managed: Ensure that AMIs and the system configuration state are
up-to-date at the DR site or region, as well as the limits on AWS services.
* Test and validate disaster recovery implementation: Regularly test failover to DR to
ensure that RTO and RPO are met.
* Recovery is automated: Use AWS or third-party tools to automate system recovery.

### 3.4 Performance Efficiency
#### 3.4.1 Selection
**PERF 1 How do you select the best performing architecture?**

Often, multiple approaches are required to get optimal performance across a workload.
Well-architected systems use multiple solutions and enable different features to improve
performance.

Best practices:
* Benchmarking: Load test a known workload on AWS and use that to make the best
selection.
* Load test: Deploy the latest version of your system on AWS using different resource types
and sizes, use monitoring to capture performance metrics, and then make a selection
based on a calculation of performance and cost.

**PERF 2 How do you select your compute solution?**
The optimal compute solution for a particular system varies based on application design, usage
patterns, and configuration settings. Architectures may use different compute solutions for
various components and enable different features to improve performance. Selecting the wrong
compute solution for an architecture can lead to lower performance efficiency.

Best practices:
* Consider options: Consider the different options of using instances, containers, and
functions to get the best performance.
* Consider instance configuration options: If you use instances, consider configuration
options such as family, instance sizes, and features (GPU, I/O, burstable).
* Consider container configuration options: If you use containers, consider configuration
options such as memory, CPU, and tenancy configuration of the container.
* Consider function configuration options: If you use functions, consider configuration
options such as memory, runtime, and state.
* Use elasticity: Use elasticity (for example, AWS Auto Scaling, Amazon Elastic Container
Service, and AWS Lambda) to meet changes in demand.

**PERF 3 How do you select your storage solution?**

The optimal storage solution for a system varies based on the kind of access method (block,
file, or object), patterns of access (random or sequential), throughput required, frequency of
access (online, offline, archival), frequency of update (WORM, dynamic), and availability and
durability constraints. Well-architected systems use multiple storage solutions and enable
different features to improve performance.

Best practices:
* Consider characteristics: Consider the different characteristics (for example, shareable, file
size, cache size, access patterns, latency, throughput, persistence of data) you require to
select the services you need to use, such as Amazon S3, Amazon EBS, Amazon Elastic File
System (Amazon EFS), and Amazon EC2 instance store.
* Consider configuration options: Considered configuration options such as PIOPS, SSD,
magnetic, and Amazon S3 Transfer Acceleration.
* Consider access patterns: Optimize for how you use storage systems based on access
patterns (for example, striping, key distribution, and partitioning).

**PERF 4 How do you select your database solution?**

The optimal database solution for a system varies based on requirements for availability,
consistency, partition tolerance, latency, durability, scalability, and query capability. Many
systems use different database solutions for various sub-systems and enable different features
to improve performance. Selecting the wrong database solution and features for a system can
lead to lower performance efficiency.

Best practices:
* Consider characteristics: Consider the different characteristics (for example, availability,
consistency, partition tolerance, latency, durability, scalability, and query capability) so
that you can select the best performing database approach (for example, relational,
NoSQL, warehouse, and in-memory).
* Consider configuration options: Consider configuration options such as storage
optimization, database level settings, memory, and cache.
* Consider access patterns: Optimize how you use database systems based on your access
patterns (for example, indexes, key distribution, partition, and horizontal scaling).
* Consider other approaches: Considered other approaches to provide queryable data, such
as search indexes, data warehouses, and Big Data.

**PERF 5 How do you configure your networking solution?**

The optimal network solution for a system varies based on latency, throughput requirements,
and so on. Physical constraints such as user or on-premises resources drive location options,
which can be offset using edge techniques or resource placement.

Best practices:
* Consider location: Consider location options (for example, AWS Region, Availability Zone,
placement groups, and edge locations) to reduce network latency.
* Consider service features: Consider service features to optimize network traffic; for
example, EC2 instance network capability, Enhanced Networking, Amazon EBS-optimized
instances, Amazon S3 Transfer Acceleration, and dynamic content delivery with Amazon
CloudFront.
* Consider networking features: Consider networking features (for example, Amazon Route
53 latency-based routing, Amazon VPC endpoints, AWS Direct Connect) to reduce network
distance or jitter.

#### 3.4.2 Review
**PERF 6 How do you evolve your workload to take advantage of new releases?**

When architecting solutions, there is a finite set of options that you can choose from. However,
over time, new technologies and approaches become available that could improve the
performance of your architecture.

Best practices:
* Use process for evaluation: Have a process to evaluate new resource types and sizes. Rerun
performance tests to evaluate any improvements in performance efficiency.
Monitoring
PERF 7 How do you monitor your resources to ensure they are performing as expected?
System performance can degrade over time. Monitor system performance to identify this
degradation and remediate internal or external factors, such as the operating system or
application load
Best practices:
* Monitor: Use Amazon CloudWatch, third-party, or custom monitoring tools to monitor
performance.
* Alarm-based notifications: Receive an automatic alert from your monitoring systems if
metrics are out of safe bounds.
* Trigger-based actions: Set alarms that cause automated actions to remediate or escalate
issues.

#### 3.4.3 Tradeoffs
**PERF 8 How do you use tradeoffs to improve performance?**

When architecting solutions, actively considering tradeoffs enables you to select an optimal
approach. Often you can improve performance by trading consistency, durability, and space for
time and latency.

Best practices:
* Use services: Use services that improve performance, such as Amazon ElastiCache,
Amazon CloudFront, and AWS Snowball.
* Use patterns: Use patterns to improve performance, such as caching, read replicas,
sharding, compression, and buffering.

### 3.5 Cost Optimization
#### 3.5.1 Cost-Effective Resources

**COST 1 How do you evaluate cost when you select AWS services?**

Amazon EC2, Amazon EBS, and Amazon S3 are building-block AWS services. Managed services,
such as Amazon RDS and Amazon DynamoDB, are higher level, or application level, AWS
services. By selecting the appropriate building blocks and managed services, you can optimize
your architecture for cost. For example, using managed services, you can reduce or remove
much of your administrative and operational overhead, freeing you to work on applications and
business-related activities.

Best practices:
* Select services for cost reduction: Analysis of services performed and services were
selected to get the lowest price point.
* Optimize for license costs: Use open source software on services such as Linux for EC2
workloads, Aurora for Oracle database workloads, and Redshift for data analytics to
reduce cost.
* Optimize using serverless and container-based approach: Use AWS Lambda, Amazon S3
for static websites, Amazon DynamoDB, and Amazon ECS to reduce overall business cost.
* Optimize using appropriate storage solutions: Use the most cost-effective storage
solution based on usage patterns (for example, Amazon EBS cold storage, Amazon S3
Standard-Infrequent Access, and Amazon Glacier).
* Optimize using appropriate databases: Use Amazon RDS (Aurora, PostgreSQL, MySQL,
SQL Server, Oracle Database) or Amazon DynamoDB (or other key-value stores, NoSQL
alternatives) where appropriate.
* Optimize using other application-level services: Use Amazon SQS, Amazon SNS, and
Amazon Simple Email Service (Amazon SES) where appropriate.
COST 2 How do you meet cost targets with resource type and size choices?
Ensure that you choose the appropriate AWS resource size for the task at hand. AWS
encourages the use of benchmarking assessments to ensure that the type you choose is
optimized for its workload.

Best practices:
* Metrics-driven resource sizing: Use performance metrics to select the right size and type
to optimize for cost. Appropriately provision throughput, sizing, and storage for services
such as Amazon EC2, Amazon DynamoDB, Amazon EBS (PIOPS), Amazon RDS, Amazon
EMR, networking, and so on.

**COST 3 How do you use pricing models to reduce cost?**
Use the pricing model that is most appropriate for your workload to minimize expense. The
optimal deployment could be fully On-Demand Instances, a mix of On-Demand and Reserved
Instances, or you might include Spot Instances, where applicable.

Best practices:
* Reserved capacity and commit deals: Regularly analyze usage and purchase Reserved
Instances accordingly; for example, Amazon EC2, Amazon DynamoDB, Amazon RDS, and
Amazon CloudFront.
* Spot Instances: Use Spot Instances (for example, Spot block or fleet) for select workloads
such as EC2 Auto scaling, AWS Batch and Amazon EMR.
* Consider region cost: Factor costs into AWS Region selection.

**COST 4 How do you plan for data transfer charges?**

Ensure that you monitor data transfer charges so that you can make architectural decisions
that might alleviate some of these costs. For example, if you are a content provider and
have been serving content directly from an S3 bucket to your end users, you might be able to
significantly reduce your costs if you push your content to the Amazon CloudFront content
delivery network (CDN). Remember that a small yet effective architectural change can
drastically reduce your operational costs.

Best practices:
* Optimize: Optimize application design, WAN acceleration, Multi-AZ, and AWS Region
selection to for data transfer.
* Use a content delivery network (CDN): Use a CDN where applicable.
* Use AWS Direct Connect: Analyze the situation and use AWS Direct Connect where
applicable.

#### 3.5.2 Matching supply and demand
**COST 5 How do you match supply of resources with customer demand?**

For an architecture that is balanced in terms of spend and performance, ensure that everything
you pay for is used and avoid significantly underutilizing instances. A skewed utilization metric
in either direction has an adverse impact on your business, in either operational costs (degraded
performance due to over-utilization), or wasted AWS expenditures (due to over-provisioning).

Best practices:
* Demand-based approach: Use automatic scaling to respond to variable demand.
* Buffer-based approach: Buffer work (for example, using Amazon Kinesis or Amazon SQS)
to defer work until there is sufficient capacity to process it.
* Time-based approach: Examples of a time-based approach include following the sun,
turning off development and test instances over the weekend, following quarterly or
annual schedules (for example, Black Friday).
Expenditure Awareness
COST 6 How do you monitor usage and cost?
Establish policies and procedures to monitor, control, and appropriately assign your costs.
Leverage tools provided by AWS for visibility into who is using what, and at what cost. This
provides you with a deeper understanding of your business needs and your teams’ operations.

Best practices:
* Tag all resources: Tag all resources that can be tagged to be able to correlate changes in
the AWS bill to changes in infrastructure and usage.
* Use billing and cost management tools: Have a standard process to load and interpret
the detailed billing reports or use Cost Explorer. Monitor usage and spend regularly using
Amazon CloudWatch or a third-party provider where applicable (for example, Cloudability,
CloudCheckr, and CloudHealth).
* Notifications: Let key members of your team know if your spend moves outside of welldefined
limits.
* Business outcome allocation: Use this method to allocate workload costs back to business
outcomes and revenue; for example, by using tagging.

**COST 7 How do you govern AWS usage?**

Establish policies and mechanisms to make sure that appropriate costs are incurred while
objectives are achieved. By employing a checks-and-balances approach through tagging and
IAM controls, you can innovate without overspending.

Best practices:
* Establish groups and roles: Use governance mechanisms to control who can spin up
instances and resources in each group; for example, dev, test, and prod groups. This applies
to AWS services and third-party solutions.
* Track project lifecycle: Track, measure, and audit the lifecycle of projects, teams, and
environments to avoid using and paying for unnecessary resources.
COST 8 How do you decommission resources?
Implement change control and resource management from project inception to end-of-life so
that you can identify necessary process changes or enhancements where appropriate. Work
with AWS Support for recommendations on how to optimize your project for your workload: for
example, when to use AWS Auto Scaling, AWS OpsWorks, AWS Data Pipeline, or the different
Amazon EC2 provisioning approaches, or review AWS Trusted Advisor cost optimization
recommendations.

Best practices:
* Automate decommission: Design your system to gracefully handle resource termination
as you identify and decommission non-critical or not required resources with low
utilization.
* Defined process: Have a process in place to identify and decommission orphaned
resources.

#### 3.5.3 Optimizing Over Time
**COST 9 How do you evaluate new services?**

As AWS releases new services and features, it is a best practice to review your existing
architectural decisions to ensure they continue to be the most cost effective.

Best practices:
* Scheduled reviews: Meet regularly with an AWS Solutions Architect, consultant, or
account team, and consider which new services or features provide lower overall cost.
* Establish a cost optimization function: Create a team that regularly reviews cost and
usage across the business.
* Review and analyze workload: Have a process for reviewing new services, resource types,
and sizes. Re-run performance tests to evaluate any reduction in cost.

