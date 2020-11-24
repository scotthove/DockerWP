FROM wordpress
# libraries for XML and PHP calendar functions
RUN apt-get update -y \
  && apt-get install -y \
     libxml2-dev \
  && apt-get clean -y \
  && docker-php-ext-install soap

RUN docker-php-ext-install calendar