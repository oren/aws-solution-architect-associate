## SQS
* SQS is pull-based, not push-based
* Messgages are max 256 KB
* Messages can be kept in the queue from 1 min to 14 days
* Default retention period is 4 days
* SQS guarantees that your messages will be procesed at least once
* Short poll - poll the queue and return immediatly
* Long poll - wait 20 seconds before returning. Can save money.

SQS Visibility Timeout
The amount of time that the message is invisible in the SQS queue after a reader picks it up. The message will be deleted if the job finished before the timeout. If not, it will become visible again and will be picked-up again.
* Default visibility timeout is 30 seconds
* Maximum is 12 hours

Two types of queue:
Standard (default) - best-effort ordering. message delivered at least once.
FIFO - order preserved, message delivered once, no duplicates. Good for banking transactions.

## SWF
* SWF is task-oriented, SQS is message-oriented
* in SQS you need to deal with duplicate messages and ensure that a message is processed only once. In SWF it's guaranteed.
* SWF keeps track of all the tasks and events in an application. in SQS you need to implement your own app-level tracking.
