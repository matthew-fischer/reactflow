export default function Marker() {
    return (
        <svg>
            <defs>
                <marker id="target_many" viewBox="0 0 10 13" markerHeight="10" markerWidth="13" refX="9" refY="6.5" fill='none' >
                    <path d="M10 12C2.57803 12 0.909955 8.66667 1.00367 7" stroke="#333" />
                    <path d="M10 1C2.57803 1 0.909955 5 1.00367 7" stroke="#333" />
                </marker>
            </defs>
            <defs>
                <marker id="source_many" viewBox="0 0 10 13" markerHeight="10" markerWidth="13" refX="9" refY="6.5" fill='none' orient="auto-start-reverse" >
                    <path d="M10 12C2.57803 12 0.909955 8.66667 1.00367 7" stroke="#333" />
                    <path d="M10 1C2.57803 1 0.909955 5 1.00367 7" stroke="#333" />
                </marker>
            </defs>
        </svg>
    )
}