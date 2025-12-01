const StatisticsItem: React.FC<{ number: string; label: string }> = ({
    number,
    label,
}) => {
    return (
        <div className="flex flex-col items-center w-64 gap-2">
            <span className="text-6xl md:text-7xl font-bold text-secondary-gold  font-[family-name:var(--font-gotham-medium)]">
                {number}
            </span>
            <p className="text-2xl font-medium text-white text-primary-brown-foreground text-center w-3/4">
                {label}
            </p>
        </div>
    );
};

export default StatisticsItem;
