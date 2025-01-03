"use client";
import React, { useState } from "react";

function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getUTCFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayInMonth = new Date(currentYear, currentMonth, 1).getDay();
  const today = currentDate.getDate();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  return (
    <div className="calendar">
      <div className="navigate-date">
        <h2 className="month">{monthsOfYear[currentMonth]}</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          <i className="bx bx-chevron-left" onClick={handlePreviousMonth}></i>
          <i className="bx bx-chevron-right" onClick={handleNextMonth}></i>
        </div>
      </div>

      <div className="weekdays">
        {daysOfWeek.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <div className="days">
        {/* Empty spans for the first day offset */}
        {[...Array(firstDayInMonth).keys()].map((_, index) => (
          <span key={`empty-${index}`}></span>
        ))}

        {/* Days of the current month */}
        {[...Array(daysInMonth).keys()].map((day, index) => {
          const dayNumber = day + 1;
          const isToday =
            dayNumber === today &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear();
          return (
            <span key={`day-${index}`} className={isToday ? "current-day" : ""}>
              {dayNumber}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
