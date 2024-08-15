interface Props {
  stats: MatrixStats;
}

const MatrixStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-md md:w-fit md:justify-center">
      <dl
        aria-label="Statistics"
        className="grid auto-cols-max gap-x-12 gap-y-2 bg-slate-900 px-6 py-3 [&>dd]:col-start-2 [&>dd]:text-center [&>dd]:text-2xl [&>dd]:font-semibold [&>dt]:text-xl [&>dt]:font-light"
      >
        <dt>Max</dt>
        <dd>{stats.max}</dd>

        <dt>Min</dt>
        <dd>{stats.min}</dd>

        <dt>Average</dt>
        <dd>{stats.average.toFixed(2)}</dd>

        <dt>Total Sum</dt>
        <dd>{stats.totalSum}</dd>

        <dt>Diagonal</dt>
        <dd>
          {stats.isDiagonal ? (
            <>
              <span className="sr-only">Yes</span>✅
            </>
          ) : (
            <>
              <span className="sr-only">No</span>❌
            </>
          )}
        </dd>
      </dl>
    </div>
  );
};

export default MatrixStats;
