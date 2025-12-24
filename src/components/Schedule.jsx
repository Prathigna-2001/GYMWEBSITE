import React from "react";
import "../styles/schedule.css";


function Schedule() {
    const weeklySchedule = [
        {
            day: "Monday",
            sessions: [
                { time: "5:30 AM - 6:30 AM", program: "Strength Training" },
                { time: "9:00 AM - 10:00 AM", program: "Fat Burn Cardio" },
                { time: "6:00 PM - 7:00 PM", program: "HIIT Workout" },
                { time: "8:00 PM - 9:00 PM", program: "Stretch & Recovery" },
            ],
        },
        {
            day: "Tuesday",
            sessions: [
                { time: "5:30 AM - 6:30 AM", program: "Muscle Building" },
                { time: "9:00 AM - 10:00 AM", program: "Yoga & Mobility" },
                { time: "6:00 PM - 7:00 PM", program: "Functional Training" },
                { time: "8:00 PM - 9:00 PM", program: "Core Strength" },
            ],
        },
        {
            day: "Wednesday",
            sessions: [
                { time: "5:30 AM - 6:30 AM", program: "CrossFit" },
                { time: "9:00 AM - 10:00 AM", program: "Zumba Fitness" },
                { time: "6:00 PM - 7:00 PM", program: "Upper Body Workout" },
                { time: "8:00 PM - 9:00 PM", program: "Flexibility Training" },
            ],
        },
        {
            day: "Thursday",
            sessions: [
                { time: "5:30 AM - 6:30 AM", program: "Lower Body Strength" },
                { time: "9:00 AM - 10:00 AM", program: "Cardio Blast" },
                { time: "6:00 PM - 7:00 PM", program: "HIIT + Core" },
                { time: "8:00 PM - 9:00 PM", program: "Yoga Relaxation" },
            ],
        },
        {
            day: "Friday",
            sessions: [
                { time: "5:30 AM - 6:30 AM", program: "Power Training" },
                { time: "9:00 AM - 10:00 AM", program: "Fat Loss Circuit" },
                { time: "6:00 PM - 7:00 PM", program: "Strength & Conditioning" },
                { time: "8:00 PM - 9:00 PM", program: "Stretch Therapy" },
            ],
        },
        {
            day: "Saturday",
            sessions: [
                { time: "6:00 AM - 7:00 AM", program: "Full Body Workout" },
                { time: "10:00 AM - 11:00 AM", program: "Dance Fitness" },
                { time: "6:00 PM - 7:00 PM", program: "Bootcamp Training" },
                { time: "8:00 PM - 9:00 PM", program: "Meditation & Recovery" },
            ],
        },
    ];

    return (
        <>
            <section className="schedule">
                <h1 className="schedule-title">Weekly Gym Schedule</h1>
                <p className="schedule-subtitle">
                    4 Daily Sessions • Morning to Night • Professional Training
                </p>

                {weeklySchedule.map((dayItem, index) => (
                    <div className="day-section" key={index}>
                        <h2 className="day-title">{dayItem.day}</h2>

                        <div className="schedule-grid">
                            {dayItem.sessions.map((session, i) => (
                                <div className="schedule-card" key={i}>
                                    <span className="time">{session.time}</span>
                                    <h3>{session.program}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Schedule;
