import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";

const router = new Router();
router
    /*
    ** This endpoint will be used to check if the service is running
    */
    .get("/service-health", (context) => {
        context.response.body = { "status": "HEALTHY" };
    })
    /*
    ** This endpoint will be used to check if the product is available with certain quantity
    ** @param id: Product ID
    ** @param planId: Plan ID
    ** @param qty: Quantity
    */
    .get("/product/:id/:planId/:qty", (context) => {
        /*
         * Your logic here to check if the product is available with the given quantity
         */

        // If product is available with the given quantity:
        context.response.body = { "status": "OK" };

        // If product is not available with the given quantity:
        // context.response.body = { "status": "NOT_OK" };
        // context.response.status = 404;
    })
    /*
    * Return a license key for the product
    * */
    .get("/getLicense/:id/:planId/:qty", (context) => {
        // return 1 license key
        context.response.body = { "license-key": "1234567890" };

        // return multiple license keys
        // context.response.body = { "license-keys": ["1234567890", "0987654321", "5678901234"] };
    });

const app = new Application();
app.use(logger.logger);
app.use(logger.responseTime);
app.use(router.routes());
app.use(router.allowedMethods());

// Set any unused port you want, just make sure web-server is redirecting to this port and it is open.
await app.listen({ port: 4242 });
