module.exports.config = {
    name: "destruction",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Draffodils",
    description: "Cause destruction with various disasters.",
    commandCategory: "fun",
    cooldowns: 1.70
};

module.exports.run = async ({ event, api, Currencies }) => {
    const cities = [
       "Starville",
    "Cyberburg",
    "Aqua Haven",
    "Fireforge",
    "Windwood",
    "Frostholm",
    "Thunderbay",
    "Crystalis",
    "Serenity Springs",
    "Shadowhaven",
    "Ebonreach",
    "Nova Heights",
    "Radiant Meadows",
    "Ironforge",
    "Coral Bay",
    "Skylandia",
    "Mythos City",
    "Arcanum Heights",
    "Mirage Sands",
    "Glimmergate",
    "Emberstead",
    "Celestia",
    "Lunarhaven",
    "Solstice Point",
    "Verdant Valley",
    "Stormwatch",
    "Aurora Isle",
    "Terra Vista",
    "Magma Peak",
    "Mystic Hollow",
    "Blossom Bay",
    "Nexusburg",
    "Chronopolis",
    "Silkshade",
    "Prismville",
    "Obsidian Reach",
    "Mariner's Cove",
    "Ethereal Peaks",
    "Dreamgate",
    "Thundercliff",
    "Horizon Reach",
    "Fablehaven",
    "Radiance Cove",
    "Echo Harbor",
    "Seraph's Rest",
    "Zephyr Springs",
    "Crimson Crest",
    "Lumina City",
    "Elysium Haven",
    "Astral Heights"
    "Metropolis",
    "Cityville",
    "Townington",
    "Urbanside",
    "Megalopolis",
    "Skyline City",
    "Brainless Squad",

        // ... (list of cities)
    ];

    const disasters = [
        { name: "earthquake", impact: getRandomImpact(), emoji: "🌍" },
    { name: "tornado", impact: getRandomImpact(), emoji: "🌪️" },
    { name: "alien invasion", impact: getRandomImpact(), emoji: "👽" },
    { name: "nuclear explosion", impact: getRandomImpact(), emoji: "☢️" },
    { name: "Category 1 Typhoon", impact: getRandomImpact(), emoji: "🌀" },
    { name: "Hypercane", impact: getRandomImpact(), emoji: "🌀🌪️" },
    { name: "C4 Bombing", impact: getRandomImpact(), emoji: "💥" },
    { name: "Zombie Apocalypse", impact: getRandomImpact(), emoji: "🧟" },
    { name: "Solar Storm", impact: getRandomImpact(), emoji: "☀️" },
    { name: "Hailstorm", impact: getRandomImpact(), emoji: "🌨️" },
    { name: "Volcanic Eruption", impact: getRandomImpact(), emoji: "🌋" },
    { name: "Mystic Plague", impact: getRandomImpact(), emoji: "🦠" },
    { name: "Cosmic Rift", impact: getRandomImpact(), emoji: "🌌" },
    { name: "Time Anomaly", impact: getRandomImpact(), emoji: "⏳" },
    { name: "Freak Gravity Wave", impact: getRandomImpact(), emoji: "🪐" },
    { name: "Mind Control Outbreak", impact: getRandomImpact(), emoji: "🧠" },
    { name: "Quantum Distortion", impact: getRandomImpact(), emoji: "🔮" },
    { name: "Dimensional Breach", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Toxic Fog", impact: getRandomImpact(), emoji: "☁️☠️" },
    { name: "Astral Alignment", impact: getRandomImpact(), emoji: "✨" },
    { name: "Pixelation Surge", impact: getRandomImpact(), emoji: "🎮" },
    { name: "Psychic Storm", impact: getRandomImpact(), emoji: "🌀🔮" },
    { name: "Gravity Inversion", impact: getRandomImpact(), emoji: "⚖️" },
    { name: "Time Freeze", impact: getRandomImpact(), emoji: "⏳❄️" },
    { name: "Nano Swarms", impact: getRandomImpact(), emoji: "🦠🔬" },
    { name: "Magnetic Anomaly", impact: getRandomImpact(), emoji: "🧲" },
    { name: "Chaos Rift", impact: getRandomImpact(), emoji: "🌀🔥" },
    { name: "Plasma Surge", impact: getRandomImpact(), emoji: "🔥🌩️" },
    { name: "Dimensional Quake", impact: getRandomImpact(), emoji: "🌍🌌" },
    { name: "Chrono Disturbance", impact: getRandomImpact(), emoji: "⏳🌀" },
    { name: "Psychic Resonance", impact: getRandomImpact(), emoji: "🔮🌀" },
    { name: "Nanobot Uprising", impact: getRandomImpact(), emoji: "🤖🔥" },
    { name: "Dark Matter Surge", impact: getRandomImpact(), emoji: "🌌⚫" },
    { name: "Resonance Cascade", impact: getRandomImpact(), emoji: "🔊🌀" },
    { name: "Reality Bending", impact: getRandomImpact(), emoji: "🌀✨" },
    { name: "Ethereal Mist", impact: getRandomImpact(), emoji: "☁️🌌" },
    { name: "Quantum Entanglement", impact: getRandomImpact(), emoji: "🔗🌀" },
    { name: "Temporal Anomaly", impact: getRandomImpact(), emoji: "⏳🌀" },
    { name: "Plague of Shadows", impact: getRandomImpact(), emoji: "🦠🌑" },
    { name: "Spectral Invasion", impact: getRandomImpact(), emoji: "👻🌀" },
    { name: "Chaos Storm", impact: getRandomImpact(), emoji: "🌀🔥" },
    { name: "Magnetic Disturbance", impact: getRandomImpact(), emoji: "🧲🌀" },
    { name: "Reality Rift", impact: getRandomImpact(), emoji: "🌀✨" },
    { name: "Microverse Expansion", impact: getRandomImpact(), emoji: "🌌🔬" },
    { name: "Cosmic Imbalance", impact: getRandomImpact(), emoji: "🌌⚖️" },
    { name: "Dimensional Tear", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Quantum Collapse", impact: getRandomImpact(), emoji: "🌀💥" },
    { name: "Energetic Vortex", impact: getRandomImpact(), emoji: "🌀⚡" },
    { name: "Nebula Wave", impact: getRandomImpact(), emoji: "🌌🌊" },
    { name: "Void Eruption", impact: getRandomImpact(), emoji: "🌌🔥" },
    { name: "Mind's Eye Cataclysm", impact: getRandomImpact(), emoji: "🌀👁️" },
    { name: "Etheric Surge", impact: getRandomImpact(), emoji: "🌀✨" } 
    { name: "Cosmic Anomaly", impact: getRandomImpact(), emoji: "🌌🌀" },
    { name: "Mind's Rift", impact: getRandomImpact(), emoji: "🌀🧠" },
    { name: "Energy Surge", impact: getRandomImpact(), emoji: "⚡🌀" },
    { name: "Nanotech Meltdown", impact: getRandomImpact(), emoji: "🤖💥" },
    { name: "Dimensional Whirlwind", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Chrono Catastrophe", impact: getRandomImpact(), emoji: "⏳💥" },
    { name: "Spectral Singularity", impact: getRandomImpact(), emoji: "👻💥" },
    { name: "Plasma Discharge", impact: getRandomImpact(), emoji: "🔥⚡" },
    { name: "Quantum Turbulence", impact: getRandomImpact(), emoji: "🌀🔗" },
    { name: "Chaos Nova", impact: getRandomImpact(), emoji: "🌀🌟" },
    { name: "Energetic Surge", impact: getRandomImpact(), emoji: "⚡🌌" },
    { name: "Nuclear Winter", impact: getRandomImpact(), emoji: "☢️❄️" },
    { name: "Reality Shatter", impact: getRandomImpact(), emoji: "🌀🔮" },
    { name: "Microquake", impact: getRandomImpact(), emoji: "🌍🔬" },
    { name: "Aether Storm", impact: getRandomImpact(), emoji: "🌀☁️" },
    { name: "Dimensional Eclipse", impact: getRandomImpact(), emoji: "🌑🌀" },
    { name: "Temporal Cascade", impact: getRandomImpact(), emoji: "⏳🔮" },
    { name: "Spectral Surge", impact: getRandomImpact(), emoji: "👻⚡" },
    { name: "Gravity Anomaly", impact: getRandomImpact(), emoji: "⚖️🌀" },
    { name: "Void Implosion", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Quantum Illusion", impact: getRandomImpact(), emoji: "🌀🎩" },
    { name: "Ethereal Whispers", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Plasma Burst", impact: getRandomImpact(), emoji: "🔥🌀" },
    { name: "Molecular Chaos", impact: getRandomImpact(), emoji: "🌀🔬" },
    { name: "Dimensional Shift", impact: getRandomImpact(), emoji: "🌀🌌" },
    { name: "Quantum Echo", impact: getRandomImpact(), emoji: "🌀🔊" },
    { name: "Reality Rip", impact: getRandomImpact(), emoji: "🌀🔮" },
    { name: "Energetic Whirlpool", impact: getRandomImpact(), emoji: "⚡🌀" },
    { name: "Void Quake", impact: getRandomImpact(), emoji: "🌌🌍" },
    { name: "Cosmic Uproar", impact: getRandomImpact(), emoji: "🌌🌀" }

      // ... (list of disasters)
         
        
    ];

    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomDisaster = disasters[Math.floor(Math.random() * disasters.length)];
    const facilitiesAffected = Math.floor(Math.random() * 1000) + 1;

    let destructionBonus = Math.random() * 20; // Generates a value between 0 and 20
    destructionBonus = destructionBonus <= 0.00001 ? 0.00001 : destructionBonus; // Minimum bonus

    const moneyDecrease = Math.floor(randomDisaster.impact / 5); // Decreased money is positive

    const increasedMoney = Math.random() < (destructionBonus / 100);
    let moneyChange = 0;
    let moneyChangeMessage = '';

    if (increasedMoney) {
        const bonusAmount = Math.floor(Math.random() * 1000000) + 1; // Generates a value between 1 and 6 digits
        moneyChange = bonusAmount;
        moneyChangeMessage = `Increased by $${moneyChange.toLocaleString()} (+${destructionBonus.toFixed(6)}% odds)`;
    } else {
        const decreasePercentage = Math.floor(Math.random() * 13) + 2; // Generates a value between 2 and 14
        moneyChange = -moneyDecrease * (1 + (decreasePercentage / 100));
        moneyChangeMessage = `Decreased by $${Math.abs(moneyChange).toLocaleString()} (-${decreasePercentage}% odds)`;
    }

    const message = `💥 A ${randomDisaster.name} ${randomDisaster.emoji} has struck ${randomCity}, affecting ${facilitiesAffected} facilities. Money ${moneyChange >= 0 ? moneyChangeMessage : moneyChangeMessage + ' (negative)'}.\n`;

    api.sendMessage(message, event.threadID);

    if (moneyChange !== 0) {
        if (moneyChange > 0) {
            await Currencies.increaseMoney(event.senderID, moneyChange);
        } else {
            await Currencies.decreaseMoney(event.senderID, Math.abs(moneyChange));
        }
    }
};

function getRandomImpact() {
    return Math.floor(Math.random() * 100) + 1;
}
