flatpickr("#check-in", {
    dateFormat: "d.m.Y",
    minDate: "today", // минимальная доступная дата
    onClose: function(selectedDates) {
      flatpickr("#check-out", {
        dateFormat: "d.m.Y",
        minDate: selectedDates[0] || "today" // минимальная доступная дата
      });
    }
  });

  flatpickr("#check-out", {
    dateFormat: "d.m.Y",
    minDate: "today" // минимальная доступная дата
  });