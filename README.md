# Clean Architecture

![Alt Clean architecture](/_assets/clean-architecture.png)

As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.

- Distinguish between detailed implementation areas and domain areas.
- Architecture does not depend on the framework.
- The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
- Both high-level and low-level modules rely on abstraction..

## Communitaction Flow

![Alt Communitaction Flow](/_assets/communication-flow-v6.png)

## Inversion of Control

![Alt Communitaction Flow](./_assets/inversion-of-control-v2.png)

In the case of 'Repository', it is an adapter layer, so you should not know about 'Repository' in 'Use Case'. Therefore, in 'Use Case', it is implemented through the Repository Interface located in the domain layer, which is then operated through Dependency Injection.  
The Action Interface of 'Presenter' is also the same.

# Use Stack

- Vite
- Typescript
- React
- Redux
- Styled Components

### Test

- Jest
- Enzyme

## Directory Structure

```
./src
├─ adapters
│  ├─ infrastructures
│  │  └─ interfaces
│  ├─ presenters
│  │  ├─ interfaces
│  │  └─ action-interfaces
│  └─ repositories
├─ domains
│  ├─ aggregates
│  │  └─ interfaces
│  ├─ entities
│  │  └─ interfaces
│  ├─ useCases
│  │  ├─ interfaces
│  │  └─ repository-interfaces
│  └─ dto
└─ frameworks
   └─ react-app
      ├─ src
         ├─ components
         │  ├─ commons
         │  ├─ logins
         │  └─ boards
         ├─ hooks
         ├─ redux
         │  ├─ interfaces
         │  ├─ actions
         │  ├─ reducers
         │  └─ store
         └─ vm

```

## Domain

The Domain layer is the most internal and fundamental layer of the Clean Architecture, also called the “Enterprise Business”. It houses the core business rules and the main entities of the application. In this layer, you define the domain entities, which represent the business objects, and implement the essential business rules. These entities and rules are independent of any technical details and should not depend on external frameworks or technologies.

### Entities

The Entities layer is the heart of Clean Architecture, encapsulating the core business logic and rules through domain objects. Its isolation ensures maintainability and testability, allowing changes in other layers without impacting the business logic. This modularity enhances flexibility and reusability across different systems.

Entities are one of the core concepts in domain modeling, representing objects that maintain a unique identity and contain both state and behavior. An Entity is not just a data holder but is responsible for controlling and managing its data. It encapsulates important business rules and logic within the domain.

### Aggregates

![Aggregate](./_assets/aggregate.png#gh-light-mode-only)
![Aggregate](./_assets/aggregate-dark.png#gh-dark-mode-only)

An Aggregate is a consistency boundary that can include multiple entities and value objects. It encapsulates internal state and controls external access. All modifications must go through the Aggregate Root, which helps manage the complexity of relationships within the model and maintain consistency when services expand or transactions become more complex.

### Data Transfer Objects (DTO´s)

DTO (Data Transfer Object) is a software pattern designed for transferring data between layers of an application. It basically involves understanding how information flows within a system.

Data Transfer Objects (DTOs) serve as simple data containers, specifically designed to transfer data between layers or processes while adhering to the principles of encapsulation and separation of concerns.

DTO is a design pattern used in programming to transfer data between different layers of an application. It allows you to encapsulate data in a simple object that does not contain business logic, and is used to improve communication efficiency and reduce coupling between different parts of the system.

Although the main reason for using a Data Transfer Object is to group what would otherwise be several remote calls into a single call, it is worth mentioning that another advantage is the encapsulation of the serialization logic for transferring data over the network. It also decouples the domain models from the presentation layer, allowing both to change independently.

### Use Cases

Use Cases define the interactions between users and the service, leveraging domain objects such as Entities, Aggregates, and Value Objects to deliver business functionality to users. From a system architecture perspective, Use Cases help separate application logic from business rules. Rather than directly controlling business logic, Use Cases facilitate interaction with the domain objects, allowing them to enforce business rules and logic.

The Use Cases layer defines the application's business actions and rules, detailing system behavior in response to external actor interactions.

A use case is a business logic unit. It is a class that must have an `execute` method which will be called by controllers. It may have a constructor to define its dependencies (concrete implementations - a.k.a. _adapters_ - of the _port_ objects) or its execution context.

**Be careful! A use case must have only one precise business responsibility!**

A use case can call objects in the same layer (such as data repositories) or in the domain layer.

## Interface Adapters

The Interface Adapters layer sits between the business layers and external layers such as the user interface and external frameworks. Here, you adapt the technical details and input and output interfaces to meet the needs of the business layers. The Interface Adapters layer helps keep the internal layers isolated from external technologies.

The Interface Adapters layer serves as a bridge between the system's core logic and external environments, converting data formats and implementing interfaces for triggering use cases. It houses presenters, views, and controllers and is subject to change with evolving external requirements or technologies.

### Infrastructures

The Infrastructure layer manages external connections such as communication with external servers via HTTP or interactions with browser APIs like LocalStorage, which are commonly used in web services.

### Repositories

In a typical backend, the Repository layer handles CRUD operations related to databases, such as storing, retrieving, modifying, and deleting data. It abstracts database interactions so that the business logic does not need to be aware of the underlying data store.

Similarly, in the sample project, the Repository layer performs POST, GET, PUT, and DELETE operations for HTTP communication with the API server. It abstracts these interactions so the business logic is not concerned with where the data originates. Data retrieved from external servers is encapsulated as DTOs (Data Transfer Objects) to ensure stability when used internally within the client.

### Presenters

The Presenter layer handles requests from the UI, forwarding them to the server. It also converts entity data into View Models used in the UI, responding appropriately based on user requests.

## Frameworks & Drivers

This is the outermost layer of Clean Architecture, where you deal with the technical details and external technologies with which your system interacts. In this layer, you implement the interaction with external frameworks, such as databases, graphical interface libraries, among others. This layer should be the most flexible to allow the replacement or upgrade of technologies without affecting the internal layers.

The Frameworks & Drivers layer, housing external frameworks, and libraries, serves as the glue code for the Clean Architecture pattern. It isolates infrastructure details, allowing easy component replacement without affecting the application. This layer, providing system access to external resources, is volatile and subject to frequent changes due
to updates in these resources.
