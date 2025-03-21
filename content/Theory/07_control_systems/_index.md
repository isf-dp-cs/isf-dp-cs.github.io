---
title: "[7] Control Systems"
weight: 70 #temporarily put first
# bookFlatSection: false
# bookCollapseSection: true
---

# Control Systems

## Review Tools
[Topic 7 Revision](https://www.computersciencecafe.com/topic-7-revision-ib.html) from Computer Science Cafe.

[Topic 7 Key Terms](https://www.computersciencecafe.com/key-terminology-ib-topic-7.html)

[Topic 7 Quizlet Flashcards](https://quizlet.com/au/306659987/topic-7-ib-computer-science-flash-cards/) from CS Classroom

[Video](https://www.youtube.com/watch?v=9JqlnBRc3eI) from CS Classroom

## Key Terms
 
{{< expand "View Terms" >}}
| Term                        | Meaning                                                                                                                                                                          |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microprocessors             | Small processors used in many control systems to process data and perform control functions.                                                                                     |
| Output Transducer           | A device that converts electrical signals from a control system into physical action or output, such as motion or heat.                                                          |
| Feedback Loops              | A system in which the output of a process is monitored and fed back into the system to adjust the input, ensuring that the desired output is achieved.                           |
| Embedded Systems            | Computer systems that are integrated into other devices or equipment, often performing control functions.                                                                        |
| Centrally Controlled System | A control system in which all functions are managed by a single central controller.                                                                                              |
| Distributed System          | A control system in which control functions are distributed across multiple controllers, working together to manage the system.                                                  |
| Autonomous Agents           | A type of control system that operates independently and makes decisions based on a set of rules or objectives, often used in robotics and artificial intelligence applications. |
{{< /expand >}}

---

## Example Problems


The example problems below are a subset of 14 questions from the past papers 2018-2024. This subset focuses on questions that cover `Topic 7 - Control Systems`, but due to the nature of IB exam questions, some sub-questions are from other units like `Topic 6 - Control Systems`.

---

**1. A temperature sensor is used in an automatic washing machine to help maintain the temperature of the water.
Outline the use of one other type of sensor used in an automatic washing machine. [2]**

{{< expand "Answer" >}}
Award [2 max]
Award [1] for type of sensor and award [1] for appropriate extension.
* Water level sensor/ ultrasonic sensor: To switch water supply on/off as required / to make sure sufficient water is in the machine/keep door locked until water drains.
* Proximity sensor: To make sure the door is closed before starting the machine.
* Vibration sensor: To stop the drum from spinning if the load is unbalanced.
* Speed (of rotation) sensor: To make sure the drum is rotating at the correct speed of the wash cycle.
* Load/ weight sensor: to measure the weight of laundry and adjust the washing parameters.
* Pressure sensor: to monitor the water pressure and water levels inside the tub.
* Moisture sensor: to control auto-dry cycles/ how dry the clothes are.
* Dirt sensor: Detects soil and detergent levels and adjusts the washing cycle.
Note: Sensor type must be identified to get a mark for extension.
{{< /expand >}}

---

**2. Outline one feature of autonomous agents. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Reactive behavior: autonomous agent senses the environment and reacts.
* Autonomy: autonomous agent activates alone for a task / is not invoked for a task / selects the task itself / operates without human supervision.
* Persistence: autonomous agent is a programmed device and the software describing an agent runs continuously.
* Sociality: autonomous agent can interact with other agents through communication / it can work in coordination and cooperation with other agents.
{{< /expand >}}

---

**3. Describe the role of feedback in a system that uses sensors and a microprocessor to control the temperature of a room. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Input to the system is provided by sensors/ temperature sensor.
* Sensors continuously send digitised data to microprocessor/ ADC converts data collected from sensors to digital data and sends it to the microprocessor.
* The microprocessor would then compare the input readings against stored values / required temperature settings.
* The microprocessor would then calculate any error value/adjusting factor required for the heating / cooling equipment.
* This difference /error value is fed back to the microprocessor to perform a suitable action (by heater/cooler)/ Error value is fed back as an input to the system.
* The above steps are repeated until the system is turned off which maintains the temperature of a room.
{{< /expand >}}

---

**4. A number of devices in and around the home can be operated by control systems.
A home owner wishes to install automatic lights to illuminate a water fountain in her garden. These lights will automatically turn on at sunset and turn off at sunrise.**

**(a) Describe two hardware components that would be an essential part of this control system. [4]**

{{< expand "Answer" >}}
Award [1] for identifying the hardware component and [1] for describing its purpose within the control system.
Mark as [2] and [2].
* Sensor: To detect the presence/absence of the light.
* Microprocessor: To carry out any processing.
* Output transducer / Actuator / Activator: To turn the lights on or off.
{{< /expand >}}

**(b) Explain the concept of feedback, with respect to computer control systems in general. [3]**

{{< expand "Answer" >}}
* The output value is (continuously) compared to the desired value.
* To produce an error value/difference between observed and measured.
* The controller uses the error value/difference between observed and measured.
* To determine the new input to the system.
{{< /expand >}}

**(c) The home owner has also installed a control system that waters the flowerbeds in the garden. This system aims to maintain the water content of the flowerbeds between a minimum and a maximum value. However, the system is only activated when the light intensity is below a certain level.
Outline the algorithm involved in controlling the watering system described above. [5]**

{{< expand "Answer" >}}
Award [5 max] for the following:
* [1] the system is turned on (when the light intensity is below a given value);
* [1] for light loop/while input light intensity is below the given value the system continues being on;
* [1] for comparison and activating watering / checking the water content of the flower beds and turning on water if the water content is not in a given range;
* [1] for water loop / watering until maximum value;
* [1] for turning off water when the water content of the flower beds is filled to maximum;
* [1] for turning off system when the light intensity increases the given value;
Note: Candidates are not requested to construct an algorithm in pseudocode.   

---

**Example answer:**


- Turn on system
   - If the input light intensity is below the maximum light intensity:
     - If the input water content is below the minimum water content:
       - Turn on water
       - While the input water content is below the maximum water content:
         - Continue watering
       - End while
       - Turn off water
     - End if
   - End if  
- Turn off system

where    
INPUT_LIGHT // inputted value of light intensity   
MAX_LIGHT // maximum value of light intensity    
INPUT_WATER // inputted value of water content   
MIN_WATER // minimum value of water content   
MAX_WATER // maximum value of water content   

{{< /expand >}}

---

**5. A company produces and sells domestic floor-cleaning robots.**
The floor-cleaning robots can clean different surfaces like wood and carpet. The floor‑cleaning robots can also avoid obstacles or stairs.
Sensors are used by the processor that controls the floor-cleaning robot so that it can move safely.

**(a) Describe two types of sensors used in the floor-cleaning robots. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Proximity sensors/ range sensors
* Optical sensors /Photocells and other photometric devices (often used in conjunction to proximity sensors)
* Tactile sensors / Contact sensors / Bumpers
* Touch sensors
* Force sensors
* Machine vision
Mark as 2 and 2
Award marks for other miscellaneous category of sensors which also are used in robots. For example, devices for detecting / measuring temperature / fluid pressure / fluid flow / electrical voltage / other physical properties.
{{< /expand >}}

**(b) Explain the function of an output transducer in this situation. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Output transducer is a device that accepts a (digital) signal from processor.
* And turns it into a physical movement.
* To make the floor cleaning robot move in different direction.   

{{< /expand >}}

**A computerized security system for the company’s headquarters protects against unauthorized access using a swipe-card system. Each door has a swipe-card reader that is connected to the central computer. A database stores the IDs of all employees and the rooms they are allowed to access.**

**(c.i) Identify one alternative computerized method that could be used in place of the swipe-card readers. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Any biometric device (finger print, eye scanner)
* Pin pads/Key pads on doors
* Smartphone access(cloud-based) / mobile access control   

{{< /expand >}}

**(c.ii) Describe how the method identified in (c)(i) functions. [3]**

{{< expand "Answer" >}}
Award [3 max]
The answer to partc (ii) should match the candidate’s answer to part (i). For example:
* A camera is used to scan the iris / finger print is scanned.
* A database stores images (scanned iris/finger print of each employee) and the rooms they are allowed access to.
* Computer compares the scanned image to images stored in the database.
* If found, the employee is allowed to enter.   

{{< /expand >}}

**(d) Compare polling and interrupts as mechanisms for the swipe-card readers to interact with the central computer. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Polling requires the computer to actively interact with each swipe device.
* The computer periodically checks each swipe device whether it has requested service, if it does not require servicing, the computer examines the next one, etc. If one of them requires servicing, the computer switches to running the serving program.
* Polling will waste processing time whilst the device is idle.
* Whilst:
* Interrupt requires the device to flag the computer.
* Processor receives interruption signal and services the interrupt by calling the appropriate system subroutine for interrupt processing/interrupt handler.
* And hence the computer’s time is not wasted whilst the swipe device is idle.
{{< /expand >}}

---

**6. A washing machine manufacturer has created its website to be viewed on standard desktop computers as well as mobile devices. The mobile browsing experience differs from desktop browsing.**

**(a.i) Define the term screen resolution. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Screen resolution is the number of pixels a screen can display (horizontally and vertically). (For example, the screen can show 1024 pixels horizontally and 768 vertically).
{{< /expand >}}

**(a.ii) Describe two issues resulting from the website being viewed on various devices, such as desktops and smartphones. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Screens that are different sizes (for example, 3–6 diagonal inches for a phone, and 9–12 diagonal inches for a tablet, size of 13–17 inches for a notebook screen, and a desktop screen size of 20–30 inches).
* Can still have the same screen resolution (for example, a laptop could have a 13-inch screen with a resolution of 1280 x 800 and a desktop computer could have a 17 inch monitor with the same 1280 x 800 resolution).
* But physically smaller screen will not show less of the website.
* The screen with the higher resolution will be able to show you more of the website because that screen has more pixels and the image will be sharper.
* But elements on the screen (icons and text) will look smaller.
* Most mobile displays currently have screens with fewer pixels than desktop displays and are physically smaller.
* Typing on small on-screen keyboards is difficult.
* Less precision (clicking a 12-pixel-high text link with a mouse is no problem but tapping the same link with fingers could be difficult).
* There is no mouse pointer so there is no concept of "hovering" over a page element/ remaining in an uncertain state.
* Most modern touch screens allow zooming.
* Allow the user to perform gestures using one or more fingers, such as swiping/pinching.
Note: Award marks not only for issues for a viewer but also for issues for a creator of the interface.
{{< /expand >}}

**Different devices such as desktop computers and mobile devices have different operating systems.**

**(b) Explain the role of the operating system (OS) in terms of managing the hardware resources. [4]**

{{< expand "Answer" >}}
Award [4 max]
* OS controls all the activities of computer system and acts as an interface between user and hardware.
* Thus the role of OS is
* To keep track of who is using which resource.
* To grant resource requests.
* To mediate conflicting requests from different users/programs.
* To allocate time to different programs or different users/ each one gets their turn to use that resource (for example printer).
* To allocate space for different users, each one gets a part of the resource (for example sharing main memory/ hard disk).
{{< /expand >}}

**(c) A washing machine uses a control system.
The microprocessor controls the washing machine and its actions. To complete the wash and rinse process the user selects the program, loads the washing machine and pushes the start button.
Describe the interaction between the sensors, microprocessors and output transducers in this situation. [6]**

{{< expand "Answer" >}}
Award [6 max]
Award [2 max] for evidence that:
* Sensors (input devices) detect/measure the water level.
* Sensors detect/measure the temperature (of the water).
* Sensors detect/measure the dampness/moisture level of the clothes.
* Sensors also detect movement of the machine's drum and other associated actions.
* Sensors continuously take readings/measurements (in the context of above) and send these readings to the processor.
Award [2 max] for evidence that:
* Processor controls sensors, valves and actuators responsible for controlling the parts that clean clothes.
* Processor determines what actions the machine should take next.
* The washing machine has been programmed/ it goes through a process of running its internal programs.
* Processor compares readings with pre-set values (in the context of the various sensors).
* If the readings fall outside of the specified range, the processor sends a message to the output transducer to switch on/off ... (in the context of part of the washing machine).
Award [2 max] for evidence that:
* Output transducers are used for turning on and off devices that control the rest of the machine.
* Such as the motors that spin the tub.
* Or the water pump.
Example:
Once the start button is pushed the washing machine begins to dump water into the drum, a sensor will detect that the water level has been reached.
Based on the setting, the processor will allow the water to flow only to a predetermined level.
It will send the signal to output transducers to shut off the water.
And begin the agitation process.
Once the timer tells that it is time, processor sends signal to output transducer to stop agitating.
It then begins the spin process/ removing the dirty water from the machine at the end of the spin cycle, the washing machine's processor sends signal to turn on the water pump and sucking it out of the machine.
{{< /expand >}}

---

**7. A mobile phone has been developed with its own dedicated operating system and is to be used as part of a smart home system in Singapore. The smart home system includes a centralized air conditioning system, a burglar alarm and a surveillance system.**   


**(a) Identify two functions of an operating system.  [2]**

{{< expand "Answer" >}}
Award [2 max]
* Managing memory
* Managing peripherals
* Processor management
* Scheduling
Note to examiners: allow any valid feature of an operating system   

{{< /expand >}}

**(b) Explain one benefit of using a dedicated operating system on the mobile phone instead of a generic operating system. [3]**   


{{< expand "Answer" >}}
Award [3 max]
* A dedicated operating system for a mobile phone will take up less storage space than a full-sized operating system.
* This will allow the device to function more quickly.
* Because it doesn’t contain features that aren’t needed.   

* A dedicated operating system for a mobile phone can be customized.
* Benefits the end users.
* As they deal with a familiar interface.   

* The dedicated OS is designed specifically for the mobile phone (hardware equipment).
* This avoids compatibility issues.
* While a generic operating system is designed for multiple types of hardware (which can lead to compatibility / various issues).   

{{< /expand >}}

**(c) Explain how sensors and microprocessors are used to ensure that the air conditioning system is able to maintain a constant temperature in the smart   
 house. [5]**

{{< expand "Answer" >}}
Award [5 max]
* A desired temperature is input/pre-set by the user.
* Sensors detect temperature.
* And regularly/continuously send (temperature) readings to the microprocessor.
* The microprocessor compares the actual readings with the pre-set (by the user) / input temperature.
* If the temperature is too hot/too cold the microprocessor sends signal to actuator.
* To adjust temperature (no need for complex details regarding actions of a heating/cooling system).
Note to examiners: Award [1] for evidence of the use of analogue-to-digital converter (sensors) and/or digital-to-analogue convertor(actuators).   

{{< /expand >}}

**(d) The developers of the smart home system are considering developing a smart home system that uses a distributed control system to manage the temperature.**  

**Contrast the use of a distributed air conditioning system with a centralized air conditioning system for maintaining a constant temperature in the smart home. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Centralized system allows control at a central point, which is then transmitted to the various rooms whilst distributed system allows individual control of settings at each unit / room so is more flexible.
* Centralized system will have same or constant temperature throughout the home whilst distributed system allows individual control of setting at each room.
* Easier to control settings centrally whilst distributed system is more complicated to control remotely (due to limited / no connectivity of the control   
 system).
* Centralized system is more difficult to install due to the connectivity required between the various components whilst distributed system is easier to install due to fewer connection   
 issues.
* If a computer system / or any connection fails in the centralized system, the whole system is not able to function correctly whilst the distributed system as whole would still function correctly.   

* Centralized system is cheaper / has lower operational cost whilst distributed system is expensive as it requires additional hardware / software.   

* Centralized systems are difficult to expand whilst distributed systems are easily expandable because self-sufficient systems can be added or removed at any point in time without affecting the overall system.   

{{< /expand >}}

---

**8. A company is planning to transform its office building into a smart building. Among other things, a smart building can control the opening and closing of its doors.**

**(a) Outline two other operations that can be controlled by a smart building.   
 [4]**

{{< expand "Answer" >}}
Award [4] max.
* Heating / air conditioning controlled.
* Help lower the energy bills / increases the comfort level of the occupants.
* Monitoring hot water system.
* Temperature and pump control monitoring via the building monitoring system allows for a proper functioning of hot water distribution through the facility.
* Security system.
* Locking/unlocking doors for the authorised or unauthorised employees/ windows open-close.
* Sprinkler system.
* Monitored for fire safety.
* Monitoring environment.
* To know whether we can take advantage of it.
Accept examples, such as, lights can be turned off if outdoor luminosity is high enough for indoor working.
* Electrical system.
* The consumed electrical power and the state of main electrical switches can be controlled/monitored.
* Monitoring/controlling pressure/humidity.
* And if their value exceeds defined limits, an alarm is generated.
Mark as [2] and [2]
Note: Reward other suitable answers.
{{< /expand >}}

**Sensors, processors and output transducers are vital components of a smart building. They play an important role in the collection and management of data.**

**(b) Explain how a smart building can control the opening and closing of all its doors. You should refer to sensors, processors and output transducers.   
 [4]**

{{< expand "Answer" >}}
Award [4] max.
* Electromagnetic sensors detect if a door is opened/closed.
* (Accept other appropriate type of sensors! For example, proximity sensor detects when a person comes close to the door, movement sensor detects people approaching the door.)
* The read/detected sensor data is transmitted to processor.
* Processor determines whether any action should be taken (if a change in the state is detected-action needed).
* Then processor sends the signal (about which door to close/open/how long to keep it open) to the output transducer/ actuator.
* Which opens/closes the door:
* The whole process is continually repeated.
{{< /expand >}}

**An operating system has a significant role in a smart building system.**

**(c.i) Identify two functions of this operating system.   
 [2]**

{{< expand "Answer" >}}
Award [2] max.
* Managing peripherals.
* Managing memory.
* Resource allocation.
Note: Reward other correct responses.
{{< /expand >}}

**(c.ii) Suggest one technique this operating system might use to determine when a hardware device needs attention. [2]**

{{< expand "Answer" >}}
Award [2] max.
* Interrupt.
* An input device sends a signal which causes the processor and the OS to stop the current operation and determine what to do next.
OR
* Polling.
* All input devices are continuously checked by the processor to see whether they want to communicate.
{{< /expand >}}

**(d) Explain why transforming the building into a smart building will be beneficial for the company. [3]**

{{< expand "Answer" >}}
Award [3] max.
Award marks for the benefits such as energy savings, productivity gains, reducing heating costs, increase the productivity of the facility staff, improve building operations, support sustainability efforts; enhance decision-making across the organization, etc.
* Energy savings.
* The use of optimal start/stop.
* Which allows the building automation system to learn, for example, when it should bring the air conditioning system online (for a particular zone in the building).
* Improved asset performance.
* Which reduces energy use / optimizes how space is used.
* And minimizes the environmental impact of buildings.
{{< /expand >}}

---


**9. Input devices that detect cars approaching a crossroads are connected to a microprocessor.**

**(a.i) Identify two types of sensor that can be used to detect approaching cars. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Electromagnetic sensors
* Pressure sensors
* Infrared sensors
* Ultrasonic sensors
* Microwave sensors
* Inductive loop detectors
* Acoustic sensors
{{< /expand >}}

**(a.ii) Outline why sensors are appropriate input devices in this situation. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Sensors are appropriate because they automatically sense the presence in the given environment.
* Without the need for human operation/sensors can detect 24x7 without losing efficiency.
* Sensors are appropriate because only presence of a car required.
* This can be reliably detected by sensors/data is sent to CPU quickly enabling quicker reaction times.
* Sensors are appropriate because it saves staffing the crossroads.
* So, costs are reduced.
{{< /expand >}}

**(b) Suggest the type of memory that could be used to store the control program in the microprocessor. [2]**

{{< expand "Answer" >}}
Award [2 max]
* ROM
* PROM
* EPROM
* EEPROM
{{< /expand >}}

**(c.i) Outline what is meant by an interrupt. [2]**

{{< expand "Answer" >}}
Award [2 max]
* An interrupt is a signal sent to the processor.
* That halts the current process.
{{< /expand >}}

**(c.ii) Explain how the microprocessor can deal with this interrupt. [3]**

{{< expand "Answer" >}}
Award [3 max]
* The microprocessor responds to that interrupt with an interrupt handler/an ISR (Interrupt Service Routine)/a routine which instructs the microprocessor on how to handle the interrupt.
* The routine can send a signal to output transducers.
* To immediately turn the traffic lights to red to stop the cars.
* The microprocessor receives an interrupt request and passes control to the interrupt handler.
* It may wait a certain amount of time before sending the signal to output transducer.
* To turn the traffic lights to red to stop the cars.
{{< /expand >}}

**(d.i) Outline one benefit of monitoring the traffic with cameras. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Cameras improve traffic flow.
* By controlling the movement of vehicles and determining traffic light timing.
* Traffic cameras help to reduce accidents.
* By controlling the movement of vehicles/identifying drivers who speed.
* Cameras improve safety/have a preventive/disciplining effect.
* Can be used to identify defaulters and to take legal action/make them pay fine.
* Installation and deployment of automated traffic cameras often pays for itself in the long run.
* Is still far less expensive than physical policing/traffic cameras can operate tirelessly 24/7.
* Traffic cameras can be deployed with very little cost to infrastructure.
* As they can run independently from the electrical grid only on solar power.
{{< /expand >}}

**(d.ii) Outline one concern about monitoring the traffic with cameras. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Privacy is an issue.
* As traffic cameras enable monitoring the activities of people (drivers, pedestrians).
* It can be costly.
* To install/maintain a large number of cameras and monitoring systems.
* Cameras can be vulnerable to damage.
* For example, wetness, moisture.
* Cameras can be vulnerable to misuse.
* For example, criminals/hackers might have worked out ways to disable or disconnect cameras.
{{< /expand >}}

---

**10. Smart control systems can manage the temperature within a house.**

**(a) Outline the steps involving the sensor, processor and output transducer to manage the temperature in the house. [5]**

{{< expand "Answer" >}}
Award [5 max]
* A pre-set value of temperature stored/ user inputs a desired temperature.
* Sensor measures/detects temperature.
* And it (regularly) sends the temperature readings to the microprocessor.
* Microprocessor compares the actual readings with the pre-set/inputted temperature.
* If the temperature is above or below the pre-set temperature/ too hot or too cold.
* Then the microprocessor sends signal to output transducer to adjust temperature accordingly.
* These steps are (continuously) repeated in a cycle.
Note: Award [1 max] for AD or/and DA conversion, if explained in the response.
{{< /expand >}}

**(b) Describe the role of feedback in this control system. [2]**

{{< expand "Answer" >}}
Award [2 max]
* A feedback system samples the output signals (temperature) then a sample (a fraction of the output signal) is fed back to the input.
* To change/modify the input signal.
* In such a way as to produce an output signal that differs substantially from the output signal produced in the absence of such feedback / as to increase or decrease the temperature in the house.
* The output value is (continuously) compared to the desired value to produce an error value/ difference/ adjusting factor.
* The error value/ difference/ adjusting factor is fed to input.
* To determine the next action/ to achieve a desired outcome/pre-set temperature in the room.
{{< /expand >}}

**(c.i) Describe one function of an operating system. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Processor Management/Scheduling: the OS decides the order in which processes have access to the processor / how much processing time each process has/ keeps tracks of the status of processes/ allocates the CPU to a process/ de-allocates processor when a process is no more required.
{{< /expand >}}

**(c.ii) Outline one reason why a dedicated operating system would be used. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Because a dedicated operating system is custom made/ designed specifically for the computer system/ for the available hardware.
* To do a specific function at maximum efficiency/ makes the most efficient use of the available resources.
* Because the OS is specifically made to manage the control system/ for cell phone (that does not require to do any general-purpose tasks); meaning that it is faster than universal OS.
{{< /expand >}}

**(d) Compare and contrast a centralized control system with a distributed control system for managing the temperature of a house. [4]**

{{< expand "Answer" >}}
Award [4 max]
Award marks for giving an account of similarities and differences between centralized system and distributed system. Award [2 max] for centralized system.
* Easier to use- it allows control at a central point.
* Controlled by a single processor.
* Centralized system is easy to physically secure.
* More cost-efficient for small systems (such as a house).
* Large systems are usually more expensive to install due to the connectivity required between the various components.
* Highly dependent on the network connectivity (the system can fail if the nodes lose connectivity as there is only one central node).
* If it must be expanded (new equipment and processes added) downtime is usually required.
* When the software program must be modified it requires downtime/ can have inadvertent effects on the existing control scheme.
* When the central server is down, no other entity is there to send/receive responses/requests.
* In case of a local failure (usually) the whole system stops working.
Award [2 max] for distributed system.
* Not beneficial to build and operate small distributed systems because of the low cost/benefit ratio.
* Controlled by a collection of independent processors.
* Distributed system is usually easier to install due to fewer connection issues.
* Easier to modify/upgrade without disturbing other processes.
* Allows individual control of settings at each unit or room, so it is more flexible.
* More complicated to control remotely.
* Difficult to know which node failed/ which node responded.
* In case of a local failure, all other processes continue to work.
{{< /expand >}}

---

**11. Cars have many automated features to improve the driving experience. One example is the use of headlights that automatically switch on and off.**

**(a) State one input device used by the automated headlights. [1]**

{{< expand "Answer" >}}
Award [1 max]
* photoelectric sensor
* light sensor
{{< /expand >}}

**Some cars have adaptive cruise control. This uses RADAR technology and a processor to ensure the car stays the same distance away from the car in front.**

**(b) Explain how the interaction between the inputs, processing and the outputs of the feedback loop ensure the car stays the same distance away from the car in front. [6]**

{{< expand "Answer" >}}
Award [6 max]
* Sensor (continuously) collecting data (related to the distance between the two vehicles).
* Data is converted to digital using ADC…
* …and sent to the processor.
* Processor has access to pre-set data (minimum distance required between the two cars).
* Processor compares the input data against stored/pre-set data.
* If the vehicle is too close, the processor sends a signal to an actuator to apply the brakes/ an output signal (for example, warning light on the dashboard/ audible warning) to the driver to apply break.
* If the car has fallen back from the car in front, the processor sends a signal to an actuator to apply acceleration/ an output signal to the driver to apply acceleration.
* This process is constantly looped (feedback loop).
{{< /expand >}}

**A system with many functions operating independently could be managed using either centralized or decentralized processing.**

**(c) Discuss the use of centralized and decentralized processing in the context of control systems such as those involved in the operation of motor vehicles. [5]**

{{< expand "Answer" >}}
Award [5 max]
Award [2 max] for centralized processing
* Centralized processing would allow the different features of the car to be controlled by a single processor.
* … this means that different features of the car are less likely to impact on the operation of other features, as the central processor can coordinate them.
Award [2 max] for decentralized / distributed processing
* Decentralized processing allows each of the car’s features to have its own processor.
* … enabling each feature to function independently/more quickly.
Award [1 max] for concluding statement
* Centralized processing is more complex for the manufacturer to program, but is possibly safer as the different components coordinate.
* Centralised processing is more expensive to achieve as the whole system needs to be coordinated in real time.
* Decentralised processing has a faster response (time due to the use of multiple smaller PLCs).
* Decentralised processing is simpler/cheaper for the car manufacturer as they can use standard parts that are already programmed, but it is more difficult to get them to coordinate with each other.
* Decentralised processing allows scalability, the subsystems can be easily customised.
* A crash in a centralized system would result in failure of the whole system / a critical system failure so would have far greater consequences than in a decentralized system where the system may be able to partially function hence are riskier than decentralized ones.
{{< /expand >}}

**As vehicles become fully autonomous (self-driving), ethical considerations must be taken into account when designing software.**

**(d) Explain one ethical concern that must be considered in the development of autonomous vehicles. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Autonomous vehicles can be seen as more dangerous to pedestrians/cyclists.
* …as they have to be programmed to react to avoid unpredictable movements from them.
* The ethical consideration is how might the processor decide whether to avoid the cyclist to hit a pedestrian instead (trolley problem).
* When autonomous vehicle control systems are perfected.
* … they should be safer than human drivers.
* … it may then be an ethical consideration as to whether a human who cannot drive should be the responsible person in the autonomous vehicle?.
* An autonomous driving system could collect detailed information about the movements of the car.
* … this information could reveal where individuals go, and raise privacy concerns.
* … which could be exploited for commercial gain/ be considered as a form of surveillance (an ethical consideration).
* There may be times when an accident is unavoidable (the trolley problem).
* The autonomous vehicle has to make a ‘decision’ about who to hit.
* In this case is the driver, the manufacturer, the software engineer or the third party accountable?.
Note to examiners: accept other reasonable answers.
{{< /expand >}}

---

**12. A rail transport company uses a global positioning system (GPS) to determine a train’s position.**

**(a) Explain how GPS works. [4]**

{{< expand "Answer" >}}
Award [4 max]
* The GPS receiver in a train takes the information from the satellite/ picks up the signals from (at least) 3 satellites.
* The signals transmitted are: time of transmission, coordinates of the satellite.
* The difference between the (atomic) time of transmission and (atomic) time of receiving the signal is used to calculate the distance.
* The method of trilateration is used to determine position from the distance to satellites/ is used to determine the train’s exact position/ is used to calculate position of the train through equation resolution on a sphere.
{{< /expand >}}

**The GPS data is used to provide real-time arrival data on video displays in train stations.**

**(b.i) State one data item concerning the arrival of a train that may be provided on the video display. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Train number/ route / direction
* Status (on time / delayed / cancelled)
* Time train / next train are due
{{< /expand >}}

**(b.ii) Outline how sensors can be used in combination with GPS to provide more accurate arrival data. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Motion sensors/vibration sensors (can be placed on track rail)
* (Sensing devices are placed) at a distance from each side of a train station/junction OR at some fixed points where obstacles (like tunnels) prevent GPS from working properly.
* Data from each sensor can be logged continuously and used in calculations/determinations (of expected arrival times/ delays / rerouting during disruption, etc.).
{{< /expand >}}

**The GPS data is made publicly available so that software developers can use it to build apps.
The mobile application ATrainAway uses the real-time train GPS data as well as the GPS data from the user’s smartphone.**

**(c) Outline two pieces of information that the ATrainAway application could provide to the user. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Real-time information (train number/ route / direction and status (on time / delayed / cancelled)) relating to the arrival / departure of a particular train.
* The time next train is due (the next 2/3 times a train will arrive at the station).
* Should save user's (passenger) most frequented stops and routes for quick access to get the next rail trip.
* Alerts (set) to let you know when a train is nearing the station.
* Trip planning (conducted) through Google trip planner within the app.
* Information on the nearest station, distance to station/ next train arrival/ next train departure to help passenger to spend less time travelling/ save time.
Mark as 2 and 2.
{{< /expand >}}

**(d) Discuss the advantages and disadvantages of using GPS in transportation systems. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Safer transit: Trains are tracked and in case of emergency the location can be reached at the earliest and emergency services provided.
* More favourable view of transit/helps passenger to get punctuality status of the train/.
* GPS can provide worldwide three-dimensional positions (24 hours a day) (in any type of weather).
* Sometimes it is too difficult to ensure reliable positioning.
* Objects, such as buildings, overpasses, and other obstructions (that shield the antenna from a satellite) can potentially weaken a satellite's signal.
* Privacy issues: Knowing the absolute position of anything, anytime, anywhere.
Mark as 2 and 2.
{{< /expand >}}

---


**13. A business has a range of different computers within the organization, including laptops, desktops and file servers. Wherever possible the organization uses a common operating system on its computers.**

**(a) Outline two resource management techniques that are likely to be carried out by the operating system of a desktop computer. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Virtual memory
* Paging
* Multitasking
* Scheduling
* Policies
* Interrupt handling
* Polling
Mark as 2 and 2.
{{< /expand >}}

**(b) Outline one way the operating system hides the complexity of the hardware from the computer user. [2]**

{{< expand "Answer" >}}
Award [2 max]
* The virtualization of real devices.
* Such as the use of drive letters for partitions to represent a virtual hard drive.
* Use of icons.
* To represent peripherals/to access different drives.
{{< /expand >}}

**(c.i) Contrast the memory requirements of a laptop computer and a file server. [2]**

{{< expand "Answer" >}}
Award [2 max]
* The primary memory/secondary memory in a laptop will be less / smaller than would be found on a file server.
* Because it is a smaller device that is used by an individual, so doesn’t need to store / run so many programmes simultaneously.
{{< /expand >}}

**(c.ii) Contrast the processor speed requirements of a laptop computer and a file server. [2]**

{{< expand "Answer" >}}
Award [2 max]
* The processor of a file server would be faster/have more cores than that of a laptop.
* As it has many more resources to manage/as it needs to keep track of many workstations/printers/peripherals.
{{< /expand >}}

**(d) State two types of sensor that are required to control the lighting to ensure it switches on when it is required. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Light sensor
* Infra-red/motion sensor
{{< /expand >}}

**(e) Explain how the system makes use of the data it receives from the sensors to determine when to switch the lights on. [4]**

{{< expand "Answer" >}}
Award [4 max]
* The sensors send data to the processor continuously.
* The data received from the sensors is converted to digital (using an analogue to digital convertor).
* The readings are compared to pre-set values in the controller/system.
* If the light level is found to be below the pre-set value and a presence is detected (in the room).
* A signal is sent to the actuator to turn on the lights.
{{< /expand >}}

**(f) Outline how the system will prevent the lights from being switched off too quickly when it thinks the room is unoccupied. [2]**

{{< expand "Answer" >}}
Award [2 max]
* A timer (set to 5 minutes).
* If the light level is found to be below the pre-set value a timer is activated but the lights remain on.
* When the timer reaches 5 minutes, the lights switch off (if no further presence is detected).
{{< /expand >}}


---

**14. Input devices that detect cars approaching a crossroads are connected to a microprocessor.**

**(a.i) Identify two types of sensor that can be used to detect approaching cars. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Electromagnetic sensors
* Pressure sensors
* Infrared sensors
* Ultrasonic sensors
* Microwave sensors
* Inductive loop detectors
* Acoustic sensors
{{< /expand >}}

**(a.ii) Outline why sensors are appropriate input devices in this situation. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Sensors are appropriate because they automatically sense the presence in the given environment.
* Without the need for human operation/sensors can detect 24x7 without losing efficiency.
* Sensors are appropriate because only presence of a car required.
* This can be reliably detected by sensors/data is sent to CPU quickly enabling quicker reaction times.
* Sensors are appropriate because it saves staffing the crossroads.
* So, costs are reduced.
{{< /expand >}}

**(b) Suggest the type of memory that could be used to store the control program in the microprocessor. [2]**

{{< expand "Answer" >}}
Award [2 max]
* ROM
* PROM
* EPROM
* EEPROM
{{< /expand >}}

**(c.i) Outline what is meant by an interrupt. [2]**

{{< expand "Answer" >}}
Award [2 max]
* An interrupt is a signal sent to the processor.
* That halts the current process.
{{< /expand >}}

**(c.ii) Explain how the microprocessor can deal with this interrupt. [3]**

{{< expand "Answer" >}}
Award [3 max]
* The microprocessor responds to that interrupt with an interrupt handler/an ISR (Interrupt Service Routine)/a routine which instructs the microprocessor on how to handle the interrupt.
* The routine can send a signal to output transducers.
* To immediately turn the traffic lights to red to stop the cars.
* The microprocessor receives an interrupt request and passes control to the interrupt handler.
* It may wait a certain amount of time before sending the signal to output transducer.
* To turn the traffic lights to red to stop the cars.
{{< /expand >}}

**(d.i) Outline one benefit of monitoring the traffic with cameras. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Cameras improve traffic flow.
* By controlling the movement of vehicles and determining traffic light timing.
* Traffic cameras help to reduce accidents.
* By controlling the movement of vehicles/identifying drivers who speed.
* Cameras improve safety/have a preventive/disciplining effect.
* Can be used to identify defaulters and to take legal action/make them pay fine.
* Installation and deployment of automated traffic cameras often pays for itself in the long run.
* Is still far less expensive than physical policing/traffic cameras can operate tirelessly 24/7.
* Traffic cameras can be deployed with very little cost to infrastructure.
* As they can run independently from the electrical grid only on solar power.
{{< /expand >}}

**(d.ii) Outline one concern about monitoring the traffic with cameras. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Privacy is an issue.
* As traffic cameras enable monitoring the activities of people (drivers, pedestrians).
* It can be costly.
* To install/maintain a large number of cameras and monitoring systems.
* Cameras can be vulnerable to damage.
* For example, wetness, moisture.
* Cameras can be vulnerable to misuse.
* For example, criminals/hackers might have worked out ways to disable or disconnect cameras.
{{< /expand >}}
