# Use Maven to build the app
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use JRE to run the app
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/target/slda-api-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]