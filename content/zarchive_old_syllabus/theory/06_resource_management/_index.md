---
title: "[6] Resource Management"
weight: 60 #temporarily put first
# bookFlatSection: false
# bookCollapseSection: true
---

# Resource Management

## Review Tools
[Topic 6 Revision](https://www.computersciencecafe.com/topic-6-revision-ib.html) from Computer Science Cafe.

[Topic 6 Key Terminology](https://www.computersciencecafe.com/topic-6-key-terminology-ib.html) from Computer Science Cafe.

[Topic 6 Quizlet Flashcards](https://quizlet.com/539642182/ib-computer-science-topic-6-flash-cards/) from CS Classroom.

[Video](https://www.youtube.com/watch?v=cqEqWjO5xGo) from CS Classroom.

---


## Example Problems

The example problems below are a subset of 18 questions from the past papers 2018-2024. This subset focuses on questions that cover `Topic 6 - Resource Management`, but due to the nature of IB exam questions, some sub-questions are from `Topic 7 - Control Systems`.

---

**1. State three operating system resource management techniques. [3]**

{{< expand "Answer" >}}
Award [3 max]
* scheduling;
* policies;
* multitasking;
* virtual memory;
* paging;
* interrupt;
* polling;
{{< /expand >}}


---

**2. Identify one advantage of using a dedicated operating system on a mobile phone. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Makes maximum use of the available (limited) memory to provide the features needed for the phone;
* Does not waste memory space with unwanted/inappropriate features;
* Ensures a higher level of security;
* Makes efficient use of hardware equipment;
* Suited to available hardware equipment;

Note: Accept examples, GUI will fit right with the screen resolution /can make running the device easier to use / better suited to their audience/ it is faster than universal OS's, etc. 
{{< /expand >}}


---

**3. Outline why single processor computers may not be able to render 3D graphics effectively. [2]**

{{< expand "Answer" >}}
Award [2 max].
* Single processor is mainly occupied with the OS jobs / might not be able to handle multiple jobs/;
* Rendering 3D graphics requires a great deal of processing (which a single processor may not be able to give);
* If attempting rendering on a single processor, a (very) high clock speed is required;
* which may not be available;
* 3D graphics processing is (inherently) parallel;
* A single processor is not able to handle parallel processing;
{{< /expand >}}


---

**4. Explain how an operating system manages peripherals. [3]**

{{< expand "Answer" >}}
Award [3 max] 
* OS keeps tracks of all peripheral devices (the I/O controller) / decides which process gets the device when and for how much time / allocates and de-allocates devices;
* OS works with device drivers and the basic input/output system (BIOS) to perform hardware tasks
/ the necessary drivers (for every peripheral) are built into the OS and/or when a new peripheral is added software / device driver provided by a hardware maker is installed into the operating system (to tell the computer's OS how to work with the peripheral/hardware) (because without a device driver the OS would not be able to communicate with this peripheral device);
* A device driver translates the OS's instructions into a language (analogue signals) that the device can understand;
* There are various types of device drivers for peripherals (such as keyboards, mice, disk drives, controllers, printers, graphics cards, ports, etc.);
* Device drivers run in the OS kernel space (in the part of the OS that directly interacts with the physical structure of the system) (and implement functions such as open, close, read, write);
* The running application/user's program can make a call to device driver functions which provide an interface between user space and kernel space;
* Example answer:
    * An OS manages peripherals via their respective drivers;
    * For example, sound card drivers;
    * are necessary so the OS knows exactly how to translate the 1s and 0s (that comprise the MP3 file) into audio signals;
    * that the sound card can output to headphones / speakers;
{{< /expand >}}


---

**5. Distinguish between the use of time slicing and priorities in the scheduling of processes by an operating system. [3]**

{{< expand "Answer" >}}
Award [3 max].
* Prioritizing enables execution of the (highest priority) process until a higher priority task enters;
* The OS/scheduler put processes (jobs) in the right place in a queue in order of priority (accept examples, an I/O operation has higher priority than calculations because it uses less CPU time);
* Time slicing allows process to execute for a fixed time/each process is given a fixed period of time (time slice) for which the process is allowed to run/;
* The scheduler is run once every time slice to choose the next process to run;
* Note: Award [1 max] if evident that the scheduler software is responsible for organizing all of the processes that need servicing/responsible for looking at what resources are available (CPU time and peripheral devices) /responsible for making decisions about what order to put all the processes in (when to start any particular process, and when to finish it);
{{< /expand >}}


---

**6. Outline what is meant by virtual memory. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Virtual memory is a memory management capability of an OS;
* that (uses hardware and software to) allow a computer to compensate for physical memory shortages by temporarily transferring data from random access memory (RAM) to disk storage;
{{< /expand >}}


---

**7.**
**(a) Outline one advantage of using virtual memory. [2]**

{{< expand "Answer" >}}
Award [2 max].
Award [1] for an advantage and [1] mark for an outline.
* Allows more applications to run than there is available physical memory;
* By the use of page/swap files/part of hard disk as primary memory;
* Larger application can run with less real RAM;
{{< /expand >}}

**(b) Outline one disadvantage of using virtual memory. [2]**

{{< expand "Answer" >}}
Award [2 max].
Award [1] for a disadvantage and [1] mark for an outline.
* Applications run more slowly;
* Uses hard drive memory as primary memory / takes more time to switch between applications;
* When a computer's virtual memory resources are overused /Reduced amount of hard drive space available for your use;
* programs lock-up/do not run/disk thrashing;
{{< /expand >}}

---

**8. Outline two operating system resource management techniques. [4]**

{{< expand "Answer" >}}
* **Scheduling**: Selecting a process (from a ready queue) and allocating CPU to this process for execution.
* **Multitasking**: Allowing a user to perform more than one computer task at a time; to enable more than one application to run at the same time/simultaneously.
* **Virtual Memory**: A section of secondary storage set up to act as primary storage.
* **Paging**: A memory management mechanism used to swap processes from secondary storage to primary storage as they are needed, in the form of equal-sized pages.
* **Interrupt**: A signal emitted by hardware or software to require the processor to stop its current process (if it is of lower priority) and action the task related to the interrupt.
* **Polling**: The constant checking of the status of devices to see if they need the attention of the CPU.

Note: Accept other appropriate descriptions. No mark for description if the name of the technique is not correctly identified.
{{< /expand >}}

---

**9. Sensors that take readings of the levels of different pollutants have been installed at a number of sites along a river. Each reading is sent to a central computer, where it is processed and analysed.**

**(a) Define the term interrupt. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Software interrupt is a signal emitted by software (when an application program terminates/ requests certain services from the OS/ a process (or an event) needs immediate attention);
* Hardware interrupt is a signal created by some action taken by a hardware device and sent to the CPU to stop its current activity;
{{< /expand >}}

**(b) Describe how polling could be used in this situation. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Award [1] for CPU checking status of each sensor to see if it needs attention
* Award [1] for identifying/ sampling their status by a program (running on the computer)
* Award [1] for operating at the same periods of time
* Award [1] for relation to given situation The computer could continually interrogate all connected sensors along the river;
* to identify if their status has changed/ they require to transmit data;
* the readings from each sensor along the river could be taken at regular intervals;
* in an order determined by the program running on the computer/ at a frequency determined by the program running on the computer;
* ensuring that the frequency of polling increases in the parts of the river where the measurements are deemed to be higher/ in specific times when the quality of the water is known to be worse/ in times of lower use of the (central computer) processing units;
{{< /expand >}}

---

**10. Explain how increasing the size of the central processing unit (CPU) cache improves the performance of a computer. [3]**

{{< expand "Answer" >}}
Award [3] max.
* Commonly used instructions from a program are stored in cache memory to be accessed by processor (faster access than from RAM);
* Increasing the size of cache memory means that more instructions can be quickly found/accessed by the processor;
* therefore, program execution is made faster;
{{< /expand >}}

---

**11. Describe how an operating system uses paging when running a program. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Memory management method that uses secondary memory to increase the amount of primary memory.
* Transfers data blocks of the same size (“pages”).
* From secondary storage to main storage when they are required.
* And returns them to secondary storage when they are not.
{{< /expand >}}

---

**12. Sensors that take readings of the levels of different pollutants have been installed at a number of sites along a river. Each reading is sent to a central computer, where it is processed and analysed.**

**(a) Define the term interrupt. [1]**

{{< expand "Answer" >}}
Award [1 max]
* (Software) interrupt is a signal emitted by software (when an application program terminates/ requests certain services from the OS/ a process (or an event) needs immediate attention.
* (Hardware) interrupt is a signal created by some action taken by a hardware device and sent to the CPU to stop its current activity.
{{< /expand >}}

**(b) Describe how polling could be used in this situation. [3]**

{{< expand "Answer" >}}
Award [3 max]
* The computer could continually interrogate all connected sensors along the river.
* To identify if their status has changed/ they require to transmit data.
* The readings from each sensor along the river could be taken at regular intervals.
* In an order determined by the program running on the computer/ at a frequency determined by the program running on the computer.
* Ensuring that the frequency of polling increases in the parts of the river where the measurements are deemed to be higher/ in specific times when the quality of the water is known to be worse/ in times of lower use of the (central computer) processing units.
{{< /expand >}}

**13. A mobile phone has been developed with its own dedicated operating system and is to be used as part of a smart home system in Singapore. The smart home system includes a centralized air conditioning system, a burglar alarm and a surveillance system.**

**(a) Identify two functions of an operating system. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Managing memory.
* Managing peripherals.
* Processor management.
* Scheduling.
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

**(c) Explain how sensors and microprocessors are used to ensure that the air conditioning system is able to maintain a constant temperature in the smart house. [5]**

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

**(d) The developers of the smart home system are considering developing a smart home system that uses a distributed control system to manage the temperature. Contrast the use of a distributed air conditioning system with a centralized air conditioning system for maintaining a constant temperature in the smart home. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Centralized system allows control at a central point, which is then transmitted to the various rooms whilst distributed system allows individual control of settings at each unit / room so is more flexible.
* Centralized system will have same or constant temperature throughout the home whilst distributed system allows individual control of setting at each room.
* Easier to control settings centrally whilst distributed system is more complicated to control remotely (due to limited / no connectivity of the control system).
* Centralized system is more difficult to install due to the connectivity required between the various components whilst distributed system is easier to install due to fewer connection issues.
* If a computer system / or any connection fails in the centralized system, the whole system is not able to function correctly whilst the distributed system as whole would still function correctly.
* Centralized system is cheaper / has lower operational cost whilst distributed system is expensive as it requires additional hardware / software.
* Centralized systems are difficult to expand whilst distributed systems are easily expandable because self-sufficient systems can be added or removed at any point in time without affecting the overall system.
{{< /expand >}}

---

**14. A company is planning to transform its office building into a smart building. Among other things, a smart building can control the opening and closing of its doors.**

**(a) Outline two other operations that can be controlled by a smart building. [4]**

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

Sensors, processors and output transducers are vital components of a smart building. They play an important role in the collection and management of data.

**(b) Explain how a smart building can control the opening and closing of all its doors. You should refer to sensors, processors and output transducers. [4]**

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

An operating system has a significant role in a smart building system.

**(c.i) Identify two functions of this operating system. [2]**

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

**15. A company produces and sells domestic floor-cleaning robots.**   
The floor-cleaning robots can clean different surfaces like wood and carpet. The floor‑cleaning robots can also avoid obstacles or stairs.
Sensors are used by the processor that controls the floor-cleaning robot so that it can move safely.

**(a) Describe two types of sensors used in the floor-cleaning robots. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Proximity sensors/ range sensors.
* Which are used to determine how close an object is to the sensor.
* Optical sensors /Photocells and other photometric devices (often used in conjunction to proximity sensors).
* Which are used to detect the presence or absence of objects.
* Tactile sensors / Contact sensors / Bumpers.
* Which are used to determine whether contact is made between sensor and another object.
* Touch sensors.
* Which indicate when contact is made.
* Force sensors.
* Which indicate the magnitude of the force with the object.
* Machine vision.
* Which is used in robotics for inspection / parts identification / guidance (accept other uses).
Mark as 2 and 2
Award marks for other miscellaneous category of sensors which also are used in robots. For example, devices for detecting / measuring temperature / fluid pressure / fluid flow / electrical voltage / other physical properties/.
{{< /expand >}}

**(b) Explain the function of an output transducer in this situation. [3]**

{{< expand "Answer" >}}
Award [3 max]
* Output transducer is a device that accepts a (digital) signal from processor.
* And turns it into a physical movement.
* To make the floor cleaning robot move in different direction.
{{< /expand >}}

A computerized security system for the company’s headquarters protects against unauthorized access using a swipe-card system. Each door has a swipe-card reader that is connected to the central computer. A database stores the IDs of all employees and the rooms they are allowed to access.

**(c.i) Identify one alternative computerized method that could be used in place of the swipe-card readers. [1]**

{{< expand "Answer" >}}
Award [1 max]
* Any biometric device (finger print, eye scanner).
* Pin pads/Key pads on doors.
* Smartphone access(cloud-based) / mobile access control.
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

**16. A washing machine manufacturer has created its website to be viewed on standard desktop computers as well as mobile devices. The mobile browsing experience differs from desktop browsing.**

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

Different devices such as desktop computers and mobile devices have different operating systems.

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
Describe the interaction between the sensors, microprocessors and output transducers in this situation.** [6]

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
* Once the start button is pushed the washing machine begins to dump water into the drum, a sensor will detect that the water level has been reached.
* Based on the setting, the processor will allow the water to flow only to a predetermined level.
* It will send the signal to output transducers to shut off the water.
* And begin the agitation process.
* Once the timer tells that it is time, processor sends signal to output transducer to stop agitating.
* It then begins the spin process/ removing the dirty water from the machine at the end of the spin cycle, the washing machine's processor sends signal to turn on the water pump and sucking it out of the machine.
{{< /expand >}}

---

**17. Input devices that detect cars approaching a crossroads are connected to a microprocessor.**

**(a.i) Identify two types of sensor that can be used to detect approaching cars. [2]**

{{< expand "Answer" >}}
Award [2 max]
* Electromagnetic sensors
* Pressure sensors
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

**18. A business has a range of different computers within the organization, including laptops, desktops and file servers. Wherever possible the organization uses a common operating system on its computers.**

**(a) Outline two resource management techniques that are likely to be carried out by the operating system of   
 a desktop computer. [4]**

{{< expand "Answer" >}}
Award [4 max]
* Virtual memory
* Paging
* Multitasking
* Scheduling
* Policies
* Interrupt handling
* Polling
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

**(f) Outline how the system will prevent the lights from being switched off too quickly when it thinks the room is unoccupied.   
 [2]**

{{< expand "Answer" >}}
Award [2 max]
* A timer (set to 5 minutes).
* If the light level is found to be below the pre-set value a timer is activated but the lights remain on.
* When the timer reaches 5 minutes, the lights switch off (if no further presence is detected).   

{{< /expand >}}