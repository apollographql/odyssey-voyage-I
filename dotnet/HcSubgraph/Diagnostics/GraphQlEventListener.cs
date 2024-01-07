using HotChocolate.Execution;
using HotChocolate.Execution.Instrumentation;

namespace EF.HcSubgraph.Diagnostics;

public class GraphQlEventListener : ExecutionDiagnosticEventListener
{
    private readonly ILogger<GraphQlEventListener> logger;

    public GraphQlEventListener(ILogger<GraphQlEventListener> logger)
    {
        this.logger = logger;
    }

    public override void RequestError(IRequestContext context, Exception exception)
    {
        logger.LogError(exception, "GraphQL Request error");
        base.RequestError(context, exception);
    }
}