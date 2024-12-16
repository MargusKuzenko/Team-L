<template>
  <div class="contact-us-container">
    <h1>Contact Us</h1>
    <p>If you have any questions or concerns, feel free to reach out to us!</p>

    <div class="contact-info">
      <div class="info-item">
        <strong>Email:</strong>
        <p>unitartucs@ut.ee</p>
      </div>
      <div class="info-item">
        <strong>Address:</strong>
        <p>Narva mnt 18, 51009 Tartu linn, Tartumaa, EST</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-us-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-us-container h1 {
  font-size: 2em;
  margin-bottom: 15px;
}

.contact-us-container p {
  font-size: 1.1em;
  margin-bottom: 30px;
}

.contact-info {
  margin-bottom: 30px;
  text-align: left;
}

.info-item {
  margin-bottom: 15px;
}

.info-item strong {
  display: block;
  font-weight: bold;
}

.info-item p {
  margin: 5px 0;
}
</style>
