import React, {useEffect, useState} from "react";
import "./App.css";
import Web3 from "web3";
import SampleContractCompiled from "backend/build/contracts/SampleContract.json";
import {SampleContract} from "backend/types/web3-v1-contracts/SampleContract";
import {AbiItem} from "web3-utils";

function App() {
    const [storageValue, setStorageValue] = useState(null as string | null);

    useEffect(() => {
        const web3Init = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = (SampleContractCompiled.networks as any)[networkId];

                const instance = new web3.eth.Contract(
                    SampleContractCompiled.abi as AbiItem[],
                    deployedNetwork?.address
                ) as unknown as SampleContract;

                await instance.methods.set(42).send({from: accounts[0]});

                const response = await instance.methods.get().call();

                setStorageValue(response);
            }
        };
        web3Init().catch(console.log);
    },[]);

    return (
        <>
            {!storageValue && <div>Loading Web3, accounts, and contract...</div>}
            {storageValue && (
                <div className="App">
                    <h1>Good to Go!</h1>
                    <h2>Smart Contract Example</h2>
                    <p>
                        If your contracts compiled and migrated successfully, below will
                        show a stored value of 42 (by default).
                    </p>
                    <div>The stored value is: {storageValue}</div>
                </div>
            )}
        </>
    );
}

export default App;
